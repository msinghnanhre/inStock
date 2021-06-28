const express = require("express");
const cors = require("cors");
const app = express();

//routes goes here


//env variables 
require("dotenv").config();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(express.static("public"))
app.use(cors());


//endoints 


//listening on port 8080
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});