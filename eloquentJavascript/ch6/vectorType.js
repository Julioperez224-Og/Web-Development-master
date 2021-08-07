class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(v){
        return new Vec(this.x + v.x, this.y + v.y)
    }

    minus(v){
        return new Vec(this.x - v.x, this.y - v.y)
    }

    get length(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
    }
}

const v1 = new Vec(4,5);

console.log(v1.plus({x:3,y:4}))
console.log(v1.minus({x:1,y:4}))
console.log(v1.length)