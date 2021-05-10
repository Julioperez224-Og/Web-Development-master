// CRUD Operations Create Read Update and Delete

// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID;


// Short hand for the above
const {MongoClient, ObjectID, ObjectId} = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager";

// creates a new id
const id = new ObjectID();
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect to database")
    }
    // console.log("Connected correctly")
    
    const db = client.db(databaseName)

    // -------------------- Delete in the DB --------------------------------
    db.collection("tasks").deleteOne({
        description: "Clean the deck"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    // ---------------------- Update in the Db -------------------------------
    // to update you can use updateOne or updateMany

    // within updateOne you must pass in the filter, the update and the callback/promise
        // const updatePromise = db.collection("users").updateOne({
        //     _id: new ObjectID("608dcd9f52f2f935706d15c5")
        //     },{
        //         // $set is an update operator
        //             // $set:{
        //             //     name: "Peeta"
        //             // }

        //         // #inc increments a numerical value by a positive or negative number
        //         // $inc:{
        //         //     age: 2
        //         // }
        //     }).then((result)=>{
        //         console.log(result)
        //     }).catch((error)=>{
        //         console.log(error)
        //     })

    // const updateManyPromise = db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // --------------------- READ in the db ------------------------------------
    // Cannot search for the id string because the string is stored within an Object
    // Must call new ObjectId()

    // --------------------------------------------Single document returned -------------------------------
    // db.collection("users").findOne({_id: new ObjectID("608dcd9f52f2f935706d15c3")}, (error,user)=>{
    //     if(error){
    //         return console.log("Could not find the data.")
    //     } else if(user === null){
    //         return console.log("User cannot be found")
    //     }
    //     console.log(user)

    // })

    // Find does not call and array but instead an object called cursor. cursor contains many methods that can be used to edit the data
    // db.collection("users").find({age:24}).toArray((err,user)=>{
    //     if(error){
    //         return console.log("Could not find the data.")
    //     } else if(user === null){
    //         return console.log("User cannot be found")
    //     }
    //     console.log(user)
    // });

    // db.collection("users").find({age:24}).count((err,count)=>{
    //     if(error){
    //         return console.log("Could not find the data.")
    //     } else if(count === null){
    //         return console.log("User cannot be found")
    //     }
    //     console.log(count)
    // });

    // db.collection("tasks").findOne({_id: new ObjectID("608da20c8cfdfa01f801be90")}, (error,task)=>{
    //     if(error){
    //     return console.log("Data could not be found")
    //     } else if(task === null){
    //         return console.log("The task was not found")
    //     }

    //     console.log(task)
    // })

    // db.collection("tasks").find({completed: false}).toArray((error, tasks)=>{
    //     if(error){
    //         return console.log("Data could not be found")
    //         } else if(tasks === null){
    //             return console.log("The task was not found")
    //         }
    //         console.log(tasks)
    // })


    // ----------------------CREATE int db --------------------------------------
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:"Kevin",
    //     age: 24
    // }, (error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert user")
    //     }

    //     // in results ops is the only method we will use
    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([{
    //     name: "Paul",
    //     age:"18"
    // }, {
    //     name:"Kate",
    //     age: 32
    // }],(error,result)=>{
    //     if(error){
    //         return console.log("Could not enter the users")
    //     }

    //     console.log(result.ops)
    // })

// Adds information to the database
    // db.collection("tasks").insertMany([
    //     {
    //         description:"Clean the deck",
    //         completed: false
    //     },
    //     {
    //         description:"Sand the Deck",
    //         completed: false
    //     },
    //     {
    //         description:"Stain the Deck",
    //         completed: false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //        return console.log("Could not enter items")
    //     }

    //     console.log(result.ops)
    // })

})