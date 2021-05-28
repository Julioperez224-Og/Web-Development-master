const mongoose = require("mongoose");
const validator = require("validator");

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
        type: String,
        // trim is used to get rid of spaces before or after the string
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value){
            if(validator.contains(value.toLowerCase(),"password")){
                throw new Error("Cannot contain password in your password")
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error("Age must be a positive number")
            }
        }
    }
})

const Task = mongoose.model("task",{
    description: {
        type: String,
        required: true,
        trim: true
    },

    completed:{
        type: Boolean,
        default: false
    }

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
const me = new User({
    name:"Sken",
    email: "cou@gmail.com",
    password: "password1",
    age: 12
})

// saves the data and returns the promise
me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log("error: ",error)
})