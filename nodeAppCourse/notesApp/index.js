const fs = require("fs");
const notes = require("./notes");
const validator = require("validator");
const chalk = require("chalk");
// Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
const yargs = require("yargs");
const { describe } = require("yargs");

// We will use JSON to read and write to the file system

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
    // sets the command to add if you pass Add into the prompt
    command:"add",
    // describes the command
    describe:"Adds a note",
    builder: {
        // Takes in a title to add
        title: {
            // Description of the title
            describe:"Note title",
            // Makes having a title mandatory, if a title is provided without data is is set to a boolean
            demandOption: true,
            // Makes it so a string must be provided
            type:"string"
        },
        body:{
            describe:"This is the body",
            demandOption:true,
            type:"string"
        }
    },
    // A function is ran once the add command is provided
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
});

yargs.command({
    command:"remove",
    describe:"Removes a note",
    handler (argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:"list",
    describe:"Show the list of notes",
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command:"read",
    describe:"Read the next note",
    builder:{
         // Takes in a title to add
         title: {
            // Description of the title
            describe:"Note title",
            // Makes having a title mandatory, if a title is provided without data is is set to a boolean
            demandOption: true,
            // Makes it so a string must be provided
            type:"string"
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

// parses the data so it is displayed in the command line
yargs.parse()
// const utils = require("./utils.js");
// console.log(utils.name);
// console.log(utils.add(1,2));