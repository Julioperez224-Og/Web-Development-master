const path = require("path")

const express = require("express");
const app = express();
const hbs = require("hbs")

// fix path so you can use html
// console.log(__dirname)
// console.log(path.join(__dirname,"../public"))
const publicDirectoryPath = path.join(__dirname,"../public")

// all static assets are put into the public directory
app.use(express.static(publicDirectoryPath))

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

app.post("/form", (req,res)=>{
    res.render("form")
})

app.get("/form", (req,res)=>{
    res.render("form")
})

app.get("/places", (req,res)=>{

})

app.get("/places/:id", (req,res)=>{

})

app.get("/tips", (req,res)=>{
    
})

app.get("/tips/:id", (req,res)=>{
    
})

app.get("/equipment", (req,res)=>{
    
})

app.get("/equipment/:id", (req,res)=>{
    
})


app.get("*", (req,res)=>{
    res.send("404")
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})