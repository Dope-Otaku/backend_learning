const asynchandler = require("express-async-handler")
const Contact = require("../models/contactModel")



//@desc get all contacts
//@access private
//@route GET /api/contact

const getContacts  = asynchandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})


//@desc get unique contacts
//@access private
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
//@access private
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
        phone,
        user_id: req.user.id,
    })
    // res.status(200).json(contacts)
    res.status(201).json(contacts)
    console.log(`the request body contains: 
        Name: ${req.body.name},
        Email: ${req.body.email},
        Phone: ${req.body.phone}`)
})

//@desc update unique contacts
//@access private
//@route PUT /api/contact/:id

const updateContact  = asynchandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("Contact Not Found!")
    }

    if(contacts.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("Access Forbidden | user don't have access to update other user contact")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact)
})

//@desc delete unique contacts
//@access private
//@route DELETE /api/contact/:id

const deleteContact  = asynchandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if(!contacts){
        res.status(404)
        throw new Error("Contact Not Found!")
    }
    if(contacts.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("Access Forbidden | user don't have access to delete other user contact")
    }


    // const deletedContact = await Contact.findByIdAndDelete(req.params.id)   //this remove() query will delete the current all data
    // res.status(200).json(deletedContact)
    await  Contact.findByIdAndDelete(contacts)  //wil delete only particular id findByIdAndDelete(req.params.id)  
    // res.status(200).json({message : `Data with ID: ${contacts} has been deleted successfully!`})
    res.status(200).json(contacts);
})





module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}