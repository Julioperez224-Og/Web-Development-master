const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
// const { validate } = require("./blogpost");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("This is not an email");
            }
        },
        unique: true
    },
    password:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Must contain a capital letter, a number, symbol and 8 characters or more long");
            }
        }
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})


userSchema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email});
    if(!user){
        throw new Error("Could not login.")
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("Could not login.")
    }

    return user
}

userSchema.pre("save", async function(next){
    const user = this;
    // the second parameter in the hash function tells your how many cycles it was hashed for
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const User = mongoose.model("users", userSchema);

// const me = new User({
//     firstName: "Julio",
//     lastName:"Perez",
//     email:"julioperez224@gmail.com",
//     password:"Train@06",
//     isAdmin: true
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((e)=>{
//     console.log(e)
// })

module.exports = User;