const fs = require("fs");
const notes = require("./notes");
const validator = require("validator");


let msg = notes("Carrots for tomorrow");

console.log(msg)
console.log(validator.isEmail("yahoo.com"))
// const utils = require("./utils.js");
// console.log(utils.name);
// console.log(utils.add(1,2));