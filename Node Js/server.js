const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();


app.use("/api/contacts", require("./Routes/contactRoutes"));  //added a middleware so that we can handle all routes cleanly



app.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})