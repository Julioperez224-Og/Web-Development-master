require("../src/db/mongoose.js")
const Task = require("../src/models/task.js")

// Task.findByIdAndDelete("609a9861d3b3be4f180c6eb3").then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

// create an async function

// use await to perform one task at a time and return the count
const findIdandDelete = async (id,completed) =>{
    const deleteTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed});
    return count;
}

// use then/catch to do stuff with the result
findIdandDelete("60c50fefb7e7343b6c8bb941",false).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

// const task = new Task({
//     description: "Eat Cake",
//     completed: true
// }).save().then((task)=>{
//     console.log(task)
// }).catch((e)=>{
//     console.log(e)
// })