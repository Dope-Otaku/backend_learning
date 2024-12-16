const asynchandler = require("express-async-handler")



//@desc register an user 
//@access public
//@route POST /api/users/register

const registerUser  = asynchandler(async (req, res)=>{
    res.status(201).json({message: "register successfull"})
})


//@desc login user 
//@access public
//@route POST /api/users/login

const loginUser  = asynchandler(async (req, res)=>{
    res.status(200).json({message: "login successfull"})
})


//@desc get current user 
//@access private
//@route GET /api/users/current

const currentUser  = asynchandler(async (req, res)=>{
    res.status(201).json({message: "current information"})
})


module.exports = {registerUser, loginUser, currentUser}