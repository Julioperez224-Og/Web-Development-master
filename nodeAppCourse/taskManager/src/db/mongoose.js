const mongoose = require("mongoose");
const validator = require("validator");

// require("../models/user")
// require("../models/task")


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    
    useUnifiedTopology: true,
    // Makes sure indexes are created
    useCreateIndex: true,
    useFindAndModify:false
})





// const walkDog = new Task({
//     description:"Go walk Ace",
//     completed: false
// })

// walkDog.save().then(()=>{
//     console.log(walkDog)
// }).catch((e)=>{
//     console.log("error: ", e)
// })


// Create an instance
// const me = new User({
//     name:"Sken",
//     email: "cou@gmail.com",
//     password: "password1",
//     age: 12
// })

// // saves the data and returns the promise
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("error: ",error)
// })