const express = require("express")
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers")
const router = express.Router()


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/current").get(currentUser)

module.exports = router