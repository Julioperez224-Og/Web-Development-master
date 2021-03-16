// node will look for an index.js file if you are requiring a folder

const blue = require("./blue");
const sadie = require("./sadie");
const janet = require("./janet");

const cats = [blue, sadie,janet];
module.exports = cats;