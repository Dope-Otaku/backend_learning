const { timeStamps } = require('console')
const mongoose = require('mongoose')
const { type } = require('os')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"]
    },
    Email: {
        type: String,
        required: [true, "Please enter your email address"]
    },
    Phone: {
        type: String,
        required: [true, "Please enter your phone number"]
    }
},{
    timeStamps : true
})


module.exports = mongoose.model("Contact", contactSchema)