const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

const task = require("../models/task");


// tasks 
router.post("/tasks", async (req,res)=>{
    const task = new Task(req.body);

    try{
        await task.save();
        res.status(201).send(task)
    } catch(e){
        res.status(400).send(e)
    }
    // task.save().then(()=>{
    //     res.send(task);
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
});

router.get("/tasks", async (req,res)=>{
    try{
        const tasks = await Task.find({})
        if(!tasks){
            return res.status(404).send();
        }
        res.status(201).send(tasks)
    }catch(e){
        res.status(500).send(e)
    }

    // Task.find().then((task)=>{
    //     if(!task){
    //         return res.send("Tasks do not exist")
    //     }
    //     res.send(task);
    // }).catch((e)=>{
    //     res.status(500).send();
    // })
})

router.get("/tasks/:id", async (req,res)=>{
    
    const _id = req.params.id;

    try{
        const task = await Task.findById({_id});
        if(!task){
            return res.status(404).send();
        }
        res.status(201).send(task)
    } catch(e){
        res.status(500).send()
    }
    
})

router.patch("/tasks/:id", async (req,res)=>{
    const _id = req.params.id;
    const allowedKeys = ["description","completed"];
    const updates = Object.keys(req.body);
    const isValidKeys = updates.every((update)=>allowedKeys.includes(update));

    if(!isValidKeys){
        return res.status(400).send({"error":"Not valid"});
    }

    try{
        // get task by id then loop through updates that can be editted
        const task = await Task.findById(_id);
        // const task = await Task.findByIdAndUpdate(_id,req.body,{new:true ,runValidators:true})
        
        isValidKeys.forEach((update)=>task[update] = req.body[update])
        
        if(!task){
            return res.status(404).send();
        }
        console.log(isValidKeys)

        res.send(task)
    } catch(e){
        res.status(400).send(e)
    }
})

router.delete("/tasks/:id", async (req,res)=>{
    const _id = req.params.id;
    try{
        const task = await Task.findByIdAndDelete(_id);
        if(!task){
            return res.status(400).send({"error":"user doesn't exist"})
        }
        
        res.status(202).send(task)
    } catch(e){
        res.status(400).send(e)
    }
})


module.exports = router