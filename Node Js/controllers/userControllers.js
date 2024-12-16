const asynchandler = require("express-async-handler")
const Users = require("../models/userModel")
const bcrypt = require("bcrypt")



//@desc register an user 
//@access public
//@route POST /api/users/register

const registerUser  = asynchandler(async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        console.log(`empty input from client side!`)
        throw new Error("All fields are mandatory !")
    }
    // Check if user already exists
    const userAvailableAlready = await Users.findOne({ email });
    if (userAvailableAlready) {
        res.status(400);
        console.error(`User already exists!`);
        throw new Error("User already exists!");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    res.status(200).json({message: "registered successfull"})
    // console.log(`the request body contains: 
    //     Name: ${req.body.name},
    //     Email: ${req.body.email},
    //     Phone: ${req.body.phone}`)
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