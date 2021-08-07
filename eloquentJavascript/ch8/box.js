const { brotliCompress } = require("zlib");

const box = {
    locked: true,
    unlocked() {this.locked = false},
    locked(){this.locked = true},
    _content: [],
    get content(){
        if(this.locked) throw new Error("Locked")
        return this._content;
    }
}

function withBoxUnlocked(body){
   if(box.locked){
       box.locked = false;
        body()
        box.locked = true;
     
   } else{
        body()
        box.locked = false;
     
   }
}

withBoxUnlocked(()=>{
    box._content.push("gold jewel")
})

try{
    withBoxUnlocked(function(){
        throw new Error("pirates")
    });
}catch(e){
    console.log("Error raised", e)
}


// console.log(box.content)