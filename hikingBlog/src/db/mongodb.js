// import mongodb
const mongodb = require("mongodb");

// initialize the client
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// We need to define the connection url
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "hiking-blog";

const id = new ObjectID();


// Connect to the DB
// MongoClient requires 3 parameters. the URL, the parser, and a callback
MongoClient.connect(connectionURL,{useNewUrlParser: true, useUnifiedTopology: true }, (error, client)=>{
    if(error){
        return console.log("Unable to connect to the database")
    }

    // this gives back a db reference
    const db = client.db(databaseName);

    // call a collection and it should have a callback function to handle errors

    // insert a single collection
    // db.collection("blog").insertOne({
    //     "title": "Tick Remover",
    //     "environment": "forest",
    //     "subtopic": "equipment",
    //     "img-url": "https://images.unsplash.com/photo-1614703518285-27715d4d2475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    //     "message":"lorem"
    // }, (error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert blog post")
    //     }
    //     // result.ops provide an array what was added to the database
    //     console.log(result.ops)
    // })


    // Query a Collection using find, then store each match into an array. Use a callback function to do something to the array. sich as log it
    db.collection("blog").find({"title": "Tick Remover"}).toArray((error, blog)=>{
        console.log(blog)
    })

    // You can count how many instances are true
    db.collection("blog").find({"title": "Tick Remover"}).count((error, count)=>{
        console.log(count)
    })
});