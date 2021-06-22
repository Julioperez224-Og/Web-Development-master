const express = require("express");
const path = require("path")
const jwt = require("jsonwebtoken")

const Task = require("./models/task")
const User = require("./models/user")

require("./db/mongoose")

const app = express();
const hbs = require("hbs");


const port = process.env.PORT || 3000;

// fix path so you can use html
// console.log(__dirname)
// console.log(path.join(__dirname,"../public"))
const publicDirectoryPath = path.join(__dirname,"../public")

// all static assets are put into the public directory
app.use(express.static(publicDirectoryPath))

// tells express to use incoming json to and object so we can use it
app.use(express.json());
app.use(express.urlencoded());

const userRouter = require("./routers/user");
app.use(userRouter)

// Dictate where the partials will live
const viewsPath = path.join(__dirname,"../templates/views")
const partialsDirectoryPath = path.join(__dirname, "../templates/partials")


// We will use handlebars to handle templating and must tell express to use it
app.set("view engine", "hbs");
// Set views path
app.set("views", viewsPath);
// hbs expects our files to live in a views folder


hbs.registerPartials(partialsDirectoryPath);



// const myFunction = async ()=>{
//     // this creates a token that make sure the user is the same
//     const token = jwt.sign({"_id":"abc123"}, "secretCode",{"expiresIn":"7 days"})
//     console.log(token)

//     // this verify the token and the code is the same and outputs the data
//     const data = jwt.verify(token,"secretCode")
//     console.log(data)
// }
// myFunction()

app.listen(port, ()=>{
    console.log("Connected to port", port)
})