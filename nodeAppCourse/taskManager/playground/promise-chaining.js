require("../src/db/mongoose.js")
const User = require("../src/models/user.js")

// Promise training tutorial

// to chain promise return the promise you want and add the .then() after the first promise
// User.findByIdAndUpdate("609aa5f29d4bed1044739710", {age: 26}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:26})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log("error")
// })

// develop an async function

const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age});
    return user
}

updateAgeAndCount("609aa5f29d4bed1044739710",44).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
