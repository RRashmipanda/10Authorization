const ShortUniqueId = require('short-unique-id');
const URL= require("../models/url")





async function handleGenerateNewShortURL(req,res){
  const body=req.body;
  if(!body.url) return res.status(400).json({error: " url is required"})

  const uid = new ShortUniqueId();
  const shortID = uid.rnd();
   await URL.create({
    shortId: shortID,
    redirectURL:body.url,
    visitHistory:[],
    createdBy:req.user._id,
   })
  
   return res.render("home",{
    id:shortID,
   });
   
}


async function handleGetClicks(req,res){
  const shortId=req.params.shortId;
  const result = await URL.findOne({shortId});
  return res.json({
    totalclicks:result.visitHistory.length,
    clicks:result.visitHistory})
}

module.exports={
    handleGenerateNewShortURL,
handleGetClicks,
}