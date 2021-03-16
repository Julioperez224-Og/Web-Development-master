const fs = require("fs");
const notes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const { describe } = require("yargs");

// const command = process.argv[2];
// const yargCommand = yargs.argv;

// console.log(yargCommand);
// if(command === "add"){
//     console.log("Add a note");
// }


yargs.version("1.1.0")

// Yargs has a command function that lets you have predefined rules and handlers

// Create a command
yargs.command({
    command:"add",
    describe:"Adds a note",
    handler: function(){
        console.log("Adds a note");
    }
});

yargs.command({
    command:"remove",
    describe:"Removes a note",
    handler: function(){
        console.log("Poof note removed");
    }
})

yargs.command({
    command:"list",
    describe:"Show the list of notes",
    handler: function(){
        console.log("Here is your list");
    }
})

yargs.command({
    command:"read",
    describe:"Read the next note",
    handler: function(){
        console.log("Read the next note please");
    }
})

console.log(yargs.argv);
// const utils = require("./utils.js");
// console.log(utils.name);
// console.log(utils.add(1,2));