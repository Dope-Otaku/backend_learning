const express = require("express");
const router = express.Router();

//this route will fetch all contact list
router.route("/").get((req, res) => {
    res.status(200).json({"message": "this api will fetch all Contacts list"})
});


//this route will handle unique contact with id number
router.route("/:id").get((req, res) => {
    res.status(200).json({"message": `this api will fetch contact list of ID: ${req.params.id}`})
});

// this route will create a new contact 
router.route("/").post((req, res) => {
    res.status(200).json({"message": "this api will create a new contact"})
});

//this route will handle update unique contacts with id
router.route("/:id").put((req, res) => {
    res.status(200).json({"message": `Contact with ID: ${req.params.id} updated successfully`})
});

//this route will delete unique contacts with id
router.route("/:id").delete((req, res) => {
    res.status(200).json({"message": `Contact with ID: ${req.params.id} deleted successfully`})
});



module.exports = router