
const fs = require("fs");
const getNotes = function(message){
    return `Your notes ${message}`;
}

const addNotes = function(title,body){
    const notes = loadNotes();

    // stores true or false if the stored note is equal to the one being added
    const duplicateNotes = notes.map(function(note){
        return note.title === title;
    })


    // if duplicateNotes equals 0 then a duplicate was not found at the note can be stored 
    if(duplicateNotes === 0){
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
const saveNotes = function(notes){
    // turns the array into string
    const dataJson = JSON.stringify(notes);
    // save the new string into notes.json
    fs.writeFileSync("notes.json", dataJson);
}
// load in existing notes but not to override any data
const loadNotes = function(){
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

const removeNotes = function(title){
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



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes:removeNotes
};