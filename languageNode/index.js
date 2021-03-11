const langs = require("langs");
const franc = require("franc");

try{
    console.log(langs.where("3", (franc("Alle menslike er fodt frie og"))).name);
}
catch(err){
    console.log("Error: "+err)
}
