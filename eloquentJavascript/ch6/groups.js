class Group{
    constructor(){
        this.group = []
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

    static from(collection){
        let group = new Group;
        for (let x of collection){
            group.add(x);
        }
        return group;
        
    }
}

const g1 = new Group;
g1.add(4)

console.log(g1.group)

g1.add(5)

const g2 = Group.from([1,4,5,6])
console.log(g1.group)
console.log(g2.group)