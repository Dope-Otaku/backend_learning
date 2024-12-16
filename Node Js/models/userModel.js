const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your username"]
    },
    email: {
        type: String,
        required: [true, "Please enter you email"],
        unique: [true, "Enter different email, this exists already"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },

},{
    timestamps: true
})


module.exports = mongoose.model("Users", userSchema);