const express = require("express");
const path = require("path");


const app = express();

// key and corresponding value for app.set
app.set("view engine", "ejs")
// Set the views path
app.set("views", path.join(__dirname,"/views") )

// tells the app to access public to use static files
app.use(express.static(path.join(__dirname,"public")))