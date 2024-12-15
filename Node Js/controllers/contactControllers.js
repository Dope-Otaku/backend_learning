//@desc get all contacts
//@access public
//@route GET /api/contact

const getContacts  = (req, res) => {
    res.status(200).json({"message": "this api will fetch all Contacts list"})
}


//@desc get unique contacts
//@access public
//@route GET /api/contact/:id

const getContact  = (req, res) => {
    res.status(200).json({"message": `this api will fetch contact list of ID: ${req.params.id}`})
}


//@desc create unique contacts
//@access public
//@route POST /api/contact

const createContact  = (req, res) => {
    res.status(200).json({"message": "this api will create a new contact"})
    console.log(`the request body contains: ${req.body}`)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory !")
    }
}

//@desc update unique contacts
//@access public
//@route PUT /api/contact/:id

const updateContact  = (req, res) => {
    res.status(200).json({"message": `Contact with ID: ${req.params.id} updated successfully`})
}

//@desc delete unique contacts
//@access public
//@route DELETE /api/contact/:id

const deleteContact  = (req, res) => {
    res.status(200).json({"message": `Contact with ID: ${req.params.id} deleted successfully`})
}





module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}