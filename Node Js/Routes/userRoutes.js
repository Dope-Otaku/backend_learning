const express = require("express")
const router = express.Router()


router.route("/register").post((req, res)=>{
    res.status(201).json({message: "register successfull"})
})

router.route("/login").post((req, res)=>{
    res.status(200).json({message: "login successfull"})
})

router.route("/current").get((req, res)=>{
    res.status(201).json({message: "current information"})
})

module.exports = router