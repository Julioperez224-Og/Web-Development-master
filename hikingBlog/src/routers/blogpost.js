const express = require("express");
const router = new express.Router();
const BlogPost = require("../models/blogpost")

router.post("/blogposts", (req,res)=>{
    const blogPost = new BlogPost(req.body);
    blogPost.save().then(()=>{
        res.render("index")
    }).catch((e)=>{
        res.status(400).send()
    })
    // res.render("form")
})


router.get("/blogposts", async (req,res)=>{
    try{
        const blogposts = await BlogPost.find({});
        if(!blogposts){
            return res.status(404).send();
        }
        res.send(blogposts);
    } catch(e){
        res.status(500).send();
    }
   
})


// Environment REST API

router.get("/blogposts/:environment", async (req,res)=>{
    const environment = req.params.environment;
    try{
        const blogposts = await BlogPost.find({environment})
        if(!blogposts){
            return res.status(404).send()
        }
        res.send(blogposts)
    } catch(e){
        res.status(500).send();
    }
    // res.render("environment")
})

router.get("/blogposts/:environment/:subtopic", async (req,res)=>{
    const environment = req.params.environment;
    const subtopic = req.params.subtopic;

    try{
        const blogposts = await BlogPost.find({environment,subtopic});
        if(!blogposts){
            return res.status(404).send()
        }
        res.send(blogposts);
    }catch(e){
        res.status(500).send()
    }
    
})

router.get("/blogposts/:environment/:subtopic/:id", async (req,res)=>{
    const environment = req.params.environment;
    const subtopic = req.params.subtopic;
    const _id = req.params.id;

    try{
        const blogpost = await BlogPost.findById({_id})
        if(!blogpost){
            return res.status(404).send()
        }
        res.send(blogpost);
    }catch(e){
        res.status(500).send()
    }

})

router.patch("/blogposts/:environment/:subtopic/:id", async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title","message","imgUrl","subtopic","environment"]
    const isValidKeys = updates.every((update) => allowedUpdates.includes(update))
    const _id = req.params.id;

    console.log(isValidKeys)
    if(!isValidKeys){
        return res.status(404).send({"error":"Not allowed to update."})
    }

    try{
        const blogpost = await BlogPost.findByIdAndUpdate(_id,req.body,{new:true, runValidators:true})
        console.log(blogpost)
        if(!blogpost){
            return res.status(404).send()
        }
        res.send(blogpost)
    } catch(e){
        return res.status(400).send(e)
    }
})

router.delete("/blogposts/:environment/:subtopic/:id", async (req,res)=>{
    try{
        const blogpost = await BlogPost.findByIdAndDelete(req.params.id);
        if(!blogpost){
            return res.status(404).send({"error":"Blogpost does not exist"})          
        }

        res.send(blogpost)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router