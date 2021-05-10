const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    // Makes sure indexes are created
    useCreateIndex: true
})

// -------------------- Define a model, create an instance and save the instance

// Use mongoose to define models 
const User = mongoose.model('user',{
    // You can set up validations with these objects
    name: {
        type: String
    },
    age:{
        type: Number
    }
})

const Task = mongoose.model("task",{
    description: {
        type: String
    },

    completed:{
        type: Boolean
    }

})

const walkDog = new Task({
    description:"Go walk Ace",
    completed: false
})

walkDog.save().then(()=>{
    console.log(walkDog)
}).catch((e)=>{
    console.log("error: ", e)
})


// // Create an instance
// const me = new User({
//     name:"Julio",
//     age: 29
// })

// // saves the data and returns the promise
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log("error: ",error)
// })