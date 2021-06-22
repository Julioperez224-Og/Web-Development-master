const mongoose = require("mongoose");
const validator = require("validator");



// develop a model

const BlogPost = mongoose.model("blogposts", {
    title: {
        type: String
        // required: true,
        // trim: true
    },
    environment:{
        type: String
        // required: true,
        // trim: true
    },
    subtopic: {
        type: String
        // required: true,
        // trim: true
    },

    message:{
        type: String
        // required: true,
        // trim: true,
        
    },
    author:{
        type: String,
        // required: true,
        // trim: true,
        default: "Julio Perez"
    },
    imgUrl: {
        type: String,
        trim: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now()
        // required: true,
        // trim: true
    }
})

// const tickBlog = new BlogPost({
//     title : "Tick Remover",
//     environment : "forest",
//     subtopic : "equipment",
//     imgUrl : "https://images.unsplash.com/photo-1614703518285-27715d4d2475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
//     message : "lorem",
//     author : "Julio Perez"
// })


// tickBlog.save().then(()=>{
//     console.log(tickBlog)
// }).catch((error)=>{
//     console.log(error)
// });


module.exports = BlogPost;