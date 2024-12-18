const express = require("express");
const router = express.Router();
const {getContacts, getContact, createContact, updateContact, deleteContact} = require("../controllers/contactControllers")
const tokenValidation = require("../middleware/tokenValidationHandler")


router.use(tokenValidation); //by applying this we can make every routes private at once!

//this route will fetch all contact list
router.route("/").get(getContacts);

//this route will handle unique contact with id number
router.route("/:id").get(getContact);

// this route will create a new contact 
router.route("/").post(createContact);

//this route will handle update unique contacts with id
router.route("/:id").put(updateContact);

//this route will delete unique contacts with id
router.route("/:id").delete(deleteContact);



module.exports = router