const express = require("express");
const router = new express.Router();
const User = require("../models/user");


// users
router.post("/users", async (req,res)=>{

    const user =  new User(req.body); 
    try{   
        await user.save();
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post("/users/login", async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try{
        const user = await User.findByCredentials(email,password)
        const token = await user.generateAuthToken()
        res.send({user,token});
    }catch(e){  
        res.status(400).send(e)
    }   
})

router.get("/users", async (req,res)=>{
    try{
        const users = await User.find({})
        if(!users){
            return res.status(404).send();
        }
        res.send(users)
    }catch(e){
        res.status(500).send(e)
    }

})

router.get("/users/:id", async (req,res)=>{
    
    const _id = req.params.id;

    try{
        const user = await User.findById({_id});
        if(!user){
            return res.status(404).send();
        }
        res.status(201).send(user)
    } catch(e){
        res.status(500).send(e)
    }
    
})
// Update User
router.patch("/users/:id", async (req,res)=>{
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedKeys = ["name","age","email","password"];
    const isValidKeys = updates.every((update)=>allowedKeys.includes(update))
    
    if(!isValidKeys){
        return res.status(400).send({error: "Invalid Option"})
    }

    // make sure middlewear runs correctly

    try{

        // first create an instance of user
        const user = await User.findById(_id)

        updates.forEach((update)=>{
            // set the property on user
            user[update] = req.body[updates]
        })

        await user.save();

        // set the properties that are being changed
        // const user = await User.findByIdAndUpdate(_id, req.body, {upsert: true, new:true, runValidators: true});
        console.log(user)
        if(!user){
            return res.status(404).send();
        }
        res.send(user)
    } catch(e){
        res.status(400).send(e)
    }
})

router.delete("/users/:id", async (req,res)=>{
    const _id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(_id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user)
    } catch (e){
        res.status(400).send(e);
    }
})

module.exports = router;