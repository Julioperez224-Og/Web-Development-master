const fs = require("fs");

// const book = {
//     title:"Harry Potter and the Chamber of Secrets",
//     author: "J.K Rowling"
// }

// const bookJson = JSON.stringify(book);

// // creates a json file and stores the json data
// fs.writeFileSync("1-json.json", bookJson);


// Use readFileSync to read the file
// The data is still not an object that can be manipulated so it is labeled a buffer

// const dataBuffer = fs.readFileSync("1-json.json")

// // toString method turns the data to a string
// const dataJSON = dataBuffer.toString();

// // JSON.parse is used to turn the data back into an object
// const parsedData = JSON.parse(dataJSON);

// console.log(parsedData.author);

const andrewBuffer = fs.readFileSync("1-json.json");
const andrewData = andrewBuffer.toString();
const andrewParse = JSON.parse(andrewData);
andrewParse.name = "Julio";
andrewParse.planet = "Mars";
andrewParse.age = 29;

const julioStringify = JSON.stringify(andrewParse);

fs.writeFileSync("1-json.json", julioStringify);







