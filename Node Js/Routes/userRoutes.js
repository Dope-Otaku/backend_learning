const express = require("express")
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers")
const router = express.Router()
const tokenValidation = require("../middleware/tokenValidationHandler")


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", tokenValidation, currentUser);


module.exports = router