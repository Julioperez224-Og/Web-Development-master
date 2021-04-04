// path module
const path = require("path")
// path.join combines the director and you can search through the director with the dot notation

const express = require("express");
const app = express();
const hbs = require("hbs")
// ------------------------------ Advanced Templating ---------------------------------------------
    // Use hbs / create two new folders in templates. 
    // Fire template folder call views and second partials
        // views folder will holder the hbs links
        // 
// console.log(path.join(__dirname, "../public"))

// if you are attempting to create a template folder, you need to create a new path
// ---------------------------------Define Paths for Express Configs -------------------------------------------------
const publicDirectorPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


// You then need to tell node to look for the path
// set to view engine allows hbs modules be stored in the view folder
// -----------------------------------Setup Handlebars Engine and Views Locations--------------------------------------
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialPath);

// Express.static will load the html file found in the public folder 
// index.html does not have to be specified as it has a special meaning
// -----------------------------------Setup static directory to serve ------------------------------------------------
app.use(express.static(publicDirectorPath))



app.get("/", (req,res) => {
    // render the index.hbs page stored in view
    res.render("index", {
        title: "Weather App",
        name: "Julio Perez"
    })
    // 
})

app.get("/about", (req,res)=>{
    res.render("about", {
        title:"About",
        name:"Julio Perez"
    })
})

app.get("/help", (req,res)=>{
    res.render("help",{
        title: "Help",
        message: "If you need help you came to the right place.",
        name:"Julio Perez"
    })
})
app.get("/weather", (req,res)=>{
    res.send({
        "location":"Baltimore",
        "temperature": 95,
        name: "Julio Perez"
    });
})

app.get("/help/*", (req,res)=>{
    res.render("404",{
        title: "article",
        message: "article not found"
    })
    
})

app.get("*", (req,res)=>{
    res.render("404",{
        title:"Error",
        message:"Page not found"
    })
})




app.listen(3000, (error)=>{
    if(!error){
        console.log("Server connected");
    }
    else{
        console.log("Connection Error", error);
    }
})