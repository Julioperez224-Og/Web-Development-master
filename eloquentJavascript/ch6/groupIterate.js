const { throws } = require("assert")
const { group } = require("console")

class Group{
    constructor(){
        this.group = []
        this.i = 0
    }

    add(x){
        if(this.group.indexOf(x) === -1){
            this.group.push(x)
        }
    }

    delete(x){
        if(!(this.group.indexOf(x) === -1)){
            delete this.group[this.group.indexOf(x)]
        }
    }

    has(x){
        return (this.group.indexOf(x) > -1)
    }

    itera(){
        let counter = this.i;
        this.i++
        return this.group[counter];
        
    }

    static from(collection){
        let group = new Group;
        for (let x of collection){
            group.add(x);
        }
        return group;
        
    }
}

const g1 = Group.from([3,4,5,3,2,7]);
console.log(g1.itera());
console.log(g1.itera());
console.log(g1.itera());
console.log(g1.itera());

