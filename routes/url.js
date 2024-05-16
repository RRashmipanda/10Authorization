const express =require("express")
const { handleGenerateNewShortURL,handleGetClicks } =require('../controllers/url') 

const router=express.Router();
router.post('/',handleGenerateNewShortURL)

router.get("/clicks/:shortId",handleGetClicks)


module.exports=router