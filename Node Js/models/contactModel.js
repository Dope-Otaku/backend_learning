const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"]
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number"]
    }
},{
    timestamps : true // adding a timestamp so that we can see the database insertion time
})


module.exports = mongoose.model("Contact", contactSchema)