const express = require("express");
const path = require("path")

const BlogPost = require("./models/blogpost")
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

const blogRouter = require("./routers/blogpost")
const userRouter = require("./routers/user")
app.use(blogRouter)
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

app.get("/", (req,res)=>{
    res.render("index");
});



// form
app.get("/form", (req,res)=>{
    res.render("form")
})


app.get("*", (req,res)=>{
    res.send("404")
})

app.listen(port, ()=>{
    console.log("Listening on port " + port)
})