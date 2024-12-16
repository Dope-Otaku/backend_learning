const asynchandler = require("express-async-handler")
const Users = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




//@desc register an user 
//@access public
//@route POST /api/users/register

const registerUser = asynchandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
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
    // console.log("Hashed Password: ", hashedPassword);

    //saving the new user
    const newUser = await Users.create({
        username,
        email,
        password: hashedPassword
    })
    if (newUser) {
        res.status(201).json({ _id: newUser.id, email: newUser.email })
    } else {
        res.status(400)
        throw new Error("Registeration Failed")
    }
    console.log(`the request body contains: 
        UserName: ${newUser.username},
        Email: ${newUser.email},
        `)
    res.status(200).json({ message: "registered successfull" })


})


//@desc login user 
//@access public
//@route POST /api/users/login

const loginUser = asynchandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
        res.status(400);
        console.log(`Empty input from client side!`);
        throw new Error("All fields are mandatory!");
    }

    // Find user by email
    const user = await Users.findOne({ email });

    // Compare passwords with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        // Generate JWT token
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                },
            },
            process.env.ACCESS_TOKEN_STRING,
            { expiresIn: "15m" } // Correctly structured options argument
        );

        // Return token in response
        res.status(200).json({ accessToken });
        return;
    }

    // If authentication fails
    res.status(401); // Unauthorized
    throw new Error("Invalid email or password!");
});


//@desc get current user 
//@access private
//@route GET /api/users/current

const currentUser = asynchandler(async (req, res) => {
    res.status(201).json({ message: "current information" })
})


module.exports = { registerUser, loginUser, currentUser }