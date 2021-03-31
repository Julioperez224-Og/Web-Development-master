const express = require("express");
// executing express and save it as a variable
const app = express();

// every time a request hits the server console is logged
app.use((req,res)=>{
    // Sends info to the html page
    // Objects will be sent as json
    res.send({"ketchup": "good", "pizza":"bad"})
})


app.listen(port=3000, () => {
    console.log("Connected to port", port)
})