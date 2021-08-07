const mongoose = require("mongoose")
const User = require("../models/user")
const express = require("express");
const router = new express.Router();

router.post("/users", async (req,res)=>{
    const user = new User(req.body);

    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user,token});
    } catch(e){
        res.status(400).send(e)
    }
})

router.post("/users/login", async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
        const user = await User.findByCredentials(email,password);
        const token = await user.generateAuthToken();
        res.send({user,token})
    } catch(e){
        res.status(400).send();
    }
})

router.get("/users", async (req,res)=>{
    try{
        const user = await User.find({})
        if(!user){
            return res.status(404).send({"error":"User does not exits"})
        }
        res.send(user)
    } catch(e){
        res.status(500).send(e)
    }
})

router.get("/users/:id", async (req,res)=>{
    const _id = req.params.id;
    try{
        const user = await User.findById(_id);
        // console.log(user)
        if(!user){
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch(e){
        res.status(500).send(e)
    }
})

router.patch("/users/:id", async (req,res)=>{
    const id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ["firstName","lastName","email","password"];
    const validKeys = updates.every(update => allowedUpdates.includes(update))

    if(!validKeys){
        return res.status(404).send();
    }

    try{
        const user = await User.findById(_id)
        updates.forEach((update)=>{
            user[update] = req.body[update];
        })

        await user.save();
    } catch(e){
        res.status(500).send(e)
    }

})

router.delete("/users/:id", async (req,res)=>{
    const _id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            res.status(400).send();
        }
        res.send(user);
    } catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;