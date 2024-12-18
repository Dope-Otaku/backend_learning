const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler")


const tokenValidation = asyncHandler(async (req, res, next)=>{
    let token;
    const authHeader = req.headers.Authorization || req.headers.authorization;  //fixed small letter
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_STRING, (err, decoded)=>{
            if(err){
                res.status(401)
                console.log("Validation Error | Token Authorization Failed")
                throw new Error("User is not authorized")
            }
            // res.status(200).json(decoded) //this response gets to client
            // console.log(decoded)
            req.user = decoded.user;
            next()
        })
        // res.status(200)
        // console.log("token authentication successfull")
        if(!token){
            res.status(401)
            throw new Error("Token Verification Failed or token missing")
        }
    }
    
})

module.exports = tokenValidation;