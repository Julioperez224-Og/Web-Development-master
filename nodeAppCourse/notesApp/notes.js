
const fs = require("fs");
const chalk = require("chalk");
// const getNotes = (message) =>{
//     return `Your notes ${message}`;
// }


const addNotes = function(title,body){
    const notes = loadNotes();

    // stores true or false if the stored note is equal to the one being added
    const duplicateNotes = notes.filter(note => note.title === title)
  

    // if duplicateNotes equals 0 then a duplicate was not found at the note can be stored 
    if(duplicateNotes.length === 0){
        // pushes the data into the array in loadNotes
        notes.push({
            title:title,
            body:body
        })
    } else{
        console.log("Title was taken")
        
    }
    

    // Calls the saveNotes to save the array into the  file
    saveNotes(notes);
}

// Save the notes into the file. the addNotes function will call saveNotes and parse in notes array
const saveNotes = (notes) => {
    // turns the array into string
    const dataJson = JSON.stringify(notes);
    // save the new string into notes.json
    fs.writeFileSync("notes.json", dataJson);
}
// load in existing notes but not to override any data
const loadNotes = () =>{
    try{
            // gets the data from the file
        const dataBuffer = fs.readFileSync("notes.json")
        // turns that data into a string
        const dataJson = dataBuffer.toString();
        // parses the data into an object and returns the data
    return JSON.parse(dataJson);
    } catch(e){
        return []
    }
    
}

const removeNotes = (title) => {
    const notes = loadNotes();
    for (note of notes){
        if(note.title === title){
            notes.splice(notes.indexOf(note),1);
            console.log(notes)
        }
        if((notes.indexOf(note) === -1) && note.title !== title){
            console.log("Note doesn't exist")
        }
    }
    saveNotes(notes);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green("List of notes"));
    notes.forEach(note => {
        console.log(chalk.red(`${note.title}`))
    })
}

// debugger is used to find errors in the code
debugger

const readNotes = (title) => {
    const notes = loadNotes();
    const readNote = notes.filter(note => note.title === title);

    // Found function is used to find a specifc item thast matches and returns it
    const foundNote = notes.find(note => note.title === title);
    
    // this if statement is to make sure the variable is not undefined, as undefined is return if nothing is found
    if(!foundNote){
        console.log(chalk.red("Note not found"));
    }else{
        console.log(chalk.green(`${title}:`) + ` ${foundNote.body}`)
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
};