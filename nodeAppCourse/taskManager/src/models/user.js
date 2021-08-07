// -------------------- Define a model, create an instance and save the instance

// Use mongoose to define models 

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema(
    {
        // You can set up validations with these objects
        name: {
            type: String,
            // trim is used to get rid of spaces before or after the string
            trim:true
        },
        email:{
            type: String,
            trim:true,
            lowercase:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is invalid")
                }
            },
            unique: true
        },
        password:{
            type: String,
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
        } ,
        tokens:[
            {
                token:{
                    type: String,
                    required: true
                }
            }
        ] 
    }
)

// create a method that creates a token whenever the user logs in
userSchema.methods.generateAuthToken = async function (){
    const user = this;
    const token = jwt.sign({_id:user._id.toString()},"secretCode")

    user.tokens = user.tokens.concat({token});

    await user.save();
    return token
}

userSchema.pre("save", async function(next){
    // this gives access to the user about to be saved
    const user = this;

    // posting and patching count as modifying
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8)
    }

    // once the function is over it tells the function to move on
    next()
})

userSchema.statics.findByCredentials = async(email,password)=>{
    
    const user = await User.findOne({email});
    console.log(user)
    if(!user){
        throw new Error("Unable to login")
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        throw new Error("Unable to login")
    }

    return user
}

// Allows you do to something to middleware
// pass in two arguments the name of the object and the function
// dont use an arrow function because it cannot use .this
// Hash plaintext password





const User = mongoose.model('user', userSchema)

module.exports = User;