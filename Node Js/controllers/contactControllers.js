const asynchandler = require("express-async-handler")
const Contact = require("../models/contactModel")



//@desc get all contacts
//@access public
//@route GET /api/contact

const getContacts  = asynchandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})


//@desc get unique contacts
//@access public
//@route GET /api/contact/:id

const getContact  = asynchandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("Contact Not Found!")
    }
    res.status(200).json(contacts)
})


//@desc create unique contacts
//@access public
//@route POST /api/contact

const createContact  = asynchandler(async (req, res) => {
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        console.error(`error 400`)
        throw new Error("All fields are mandatory !")
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    })
    // res.status(200).json(contacts)
    res.status(201).json(contacts)
    console.log(`the request body contains: 
        Name: ${req.body.name},
        Email: ${req.body.email},
        Phone: ${req.body.phone}`)
})

//@desc update unique contacts
//@access public
//@route PUT /api/contact/:id

const updateContact  = asynchandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("Contact Not Found!")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact)
})

//@desc delete unique contacts
//@access public
//@route DELETE /api/contact/:id

const deleteContact  = asynchandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("Contact Not Found!")
    }
    // const deletedContact = await Contact.findByIdAndDelete(req.params.id)   //this remove()vquery will delete the current id data
    // res.status(200).json(deletedContact)
    await  Contact.findByIdAndDelete(contacts)
    // res.status(200).json({message : `Data with ID: ${contacts} has been deleted successfully!`})
    res.status(200).json(contacts);
})





module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}