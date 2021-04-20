const { randomInt } = require("crypto");
const express = require("express");
const { dirname } = require("path");
const app = express()
const path = require("path");

// key and corresponding value for app.set
app.set("view engine", "ejs")
// Set the views path
app.set("views", path.join(__dirname,"/views") )

// tells the app to access public to use static files
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req,res)=>{
    res.render("home")
})

app.get("/cats", (req,res)=>{
    const cats = ["Harry","Lily","Paul","Ninja"]
    res.render("cats",{cats})
})

app.get("/r/:subreddit", (req,res)=>{
    const subreddits = req.params;
    const subreddit = subreddits.subreddit;
    const subs = {
        "cats": {
            "subs": 40000,
            "comments": [
                {
                    "author": "Kyle",
                    "comment": "I love this cat"
                }
            ]
        },
        "chickens": {
            subs: 80000,
            comments: [
                {
                    author: "Paul",
                    comment: "They eat ticks"
                }
            ]
        },
        "soccer": {
            subs: 4322100,
            comments: [
                {
                    author: "Jake",
                    comment: "Losing was the worst"
                }
            ]
        },
    }
    console.log(subs.subreddit)
    if(subs[subreddit]){
        console.log("works")
        res.render("subreddit", {subreddit})
    } else{
        console.log("DOesnt work")
        res.send("<h1>404 Doesn't exist</h1>")
    }
    
})

app.get("/rand", (req,res) => {
    res.render("random",{
        randInt: Math.floor((Math.random() * 10) + 1)
    })
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})