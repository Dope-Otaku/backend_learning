const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

dbConnect(); //database connection initialized
const app = express();


app.use(express.json())
app.use("/api/contacts", require("./Routes/contactRoutes"));  //added a middleware so that we can handle all routes cleanly
app.use(errorHandler) //middleware



app.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})