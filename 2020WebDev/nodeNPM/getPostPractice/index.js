
// RESTFUL Routes for Comments

//  /comments Will be the base
// GET /comments list all comments
// POST /comments Create a new comment
// GET /comments/:id Get a single comment using an id
// PATCH /comments/:id Updates a comment
// DELETE /comments/:id Will delete a comment366

// Same format can be used for JSON API
const express = require("express");
const app = express();
const path = require("path")

// tells express to use a middle that parses the url body
app.use(express.urlencoded({extended:true}))
// allows the body to handle JSON
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))

app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")

const comments = [
    {
        username:'Todd',
        comment:"Hey man whats up"
    },
    {
        username:'EJ',
        comment:"Nothing much you?"
    },
    {
        username:'Fran',
        comment:"Song night!"
    }
]

app.get("/comments", (req,res)=>{
    res.render("comments/index",{comments})
})
// data from /comments/new will be posted to /comments with the post request below
app.get("/comments/new", (req,res)=>{
    res.render("comments/new")
})

app.post("/comments", (req,res)=>{
    const {username,comment} = req.body;
    comments.push({username,comment})
    console.log(req.body)
    res.redirect("/comments")
})

app.get("/", (req,res)=>{
    res.render("getPost")
})

app.get("/tacos", (req,res)=>{
    console.log(req.body)
    res.send("Taco meat chosed")
})

app.post("/tacos", (req,res)=>{
    const {meat,quantity} = req.body;
    res.send(`Here are you ${meat} tacos. You ordered ${quantity} of them.`)
})


app.listen(3000, ()=>{
    console.log("listening to port 3000")
})