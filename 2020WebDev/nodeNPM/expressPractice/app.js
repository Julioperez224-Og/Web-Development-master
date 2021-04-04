// Query String is a portion of the url that comes after the ?
// a query will look like this ?q=apple in the browser

const express = require("express");
// executing express and save it as a variable
const app = express();

// every time a request hits the server console is logged
// app.use((req,res)=>{
//     // Sends info to the html page
//     // Objects will be sent as json
//     res.send({"ketchup": "good", "pizza":"bad"})
// })

// creating a get route
// requires a path and a callback function with request and response parameters
app.get("/", (req, res)=>{
    res.send("Welcome to the home page")
});

app.get("/dogs", (req,res)=>{
    res.send("Dog path")
})

// Patterns can be used to dictate the path
// :subreddit creates a variable to be the subreddit
app.get("/r/:subreddit", (req, res)=>{
    // The variable is stored in the params object
    const {subreddit} = req.params
    console.log(subreddit)
    res.send(`Welcome to the ${subreddit} subreddit`)
})

// Parameters can have multiple variables
app.get("/r/:subreddit/:postId", (req,res)=>{
    const {subreddit, postId} = req.params;
    res.send(`Welcome to the ${subreddit} subreddit with the postId of ${postId}`)
})

// Testing query
app.get("/search", (req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing found if nothing searched</h1>`)
    }
    else{
        res.send(`<h1>Search results for ${q}</h1>`)
    }
    
    // req.query stores all the queries in the object
    console.log(req.query)
})

app.listen(port=3000, () => {
    console.log("Connected to port", port)
})