// level plan
let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;


// reading a level using a class

    class Level {
        constructor(plan) {
            let rows = plan.trim().split("\n").map(l => [...l]);
            this.height = rows.length;
            this.width = rows[0].length;
            this.startActors = [];

            this.rows = rows.map((row, y) => {
                return row.map((ch, x) => {
                    let type = levelChars[ch];
                    if (typeof type == "string") return type;
                    this.startActors.push(
                        type.create(new Vec(x, y), ch)
                        );
                    return "empty";
                })
            })
        }
    }
// state class is used to record the state of the game

class State {
    constructor(level, actors, status){
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level){
        return new State(level,level.startActors, "playing");
    }

    get player(){
        return this.actors.find(a => a.type = "player")
    }
}

// vec class use to stor the actors position and size
class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(other){
        return new Vec(this.x + other.x, this.y + other.y)
    }

    // scales a vector by a given number
    times(factor){
        return new Vec(this.x * factor, this.y * factor);
    }
}

// Player class contains the property speed to simulate momentum and gravity
class Player{
    constructor(pos,speed){
        this.pos = pos;
        this.speed = speed;
    }

    get type(){
        return "player";
    }

    static create(pos){
        return new Player(pos.plus(new Vec(0,-0.5)), new Vec(0,0));
    }
}

Player.prototype.size = new Vec(0.8, 1.5);
// creating lava, if a reset is provided it is treated as a drip
class Lava{
    constructor(pos,speed,reset){
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }

    get type(){return "lava"}

    static create(pos,ch){
        if(ch=="="){
            return new Lava(pos, new Vec(2,0));
        } else if (ch =="|"){
            return new Lava(pos, new Vec(0,2));
        } else if(ch =="v"){
            return new Lava(pos,new Vec(0,3), pos);
        }
    }
}

Lava.prototype.size = new Vec(1,1)

// coin class sit in one place. given a wobble effect. stores a base position as well as a wobble position
class Coin{
    constructor(pos,basePos,wobble){
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }

    get type(){return "coin";}

    static create(pos){
        let basePos = pos.plus(new Vec(0.2,0.1));
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2)
    }
}

Coin.prototype.size = new Vec(.6,.6)

// define levelchars object that maps plan characters to either background grid types or actor classes
const levelChars = {
    ".":"empty", "#": "wall","+":"lava",
    "@":Player,"o":Coin,"=":Lava,"v":Lava,"|": Lava
}

let simpleLevel = new Level(simpleLevelPlan);
console.log(`${simpleLevel.width} by ${simpleLevel.height}`)
// ------------------------------------ ^^^ Makes the Level ^^^ ------------------------------------
// ---------------------------------- // Drawing //------------------------------------------------
function elt(name,attrs, ...children){
    // creates an element base on the name provided
    let dom = document.createElement(name);

    // attrs is an object that stores attribute names and values / loop through it to add the attributes to the dom
    for(let attr of Object.keys(attrs)){
        dom.setAttribute(attr, attrs[attr]);
    }

    // loop through the array of children and add the children to the dom
    for(let child of children){
        dom.append(child)
    }

    return dom
}

// the display is created by giving the parent element to which it should append itself and a level object
class DOMDisplay{
    constructor(parent,level){
        this.dom = elt("div",{class:"game"},drawGrid(level))
        this.actorLayer = null;
        parent.appendChild(this.dom)
    }

    clear(){this.dom.remove();}
}

// coordinates and sizes are tracked in gridUnits where a size or distance of 1 means one grid block
// scale constant gives the number of pixels that a single unit takes up on the screen

const scale = 20;

function drawGrid(level){
    return elt("table",{
        class:"background",
        style: `width: ${level.width * scale}px`
    }, ...level.rows.map(row => elt("tr",{style:`height: ${scale}px`}),...row.map(type => elt("td",{class:type}))))
}

// we draw actos by creating a DOM element for it, setting the el position and size based of the actor properties
function drawActors(actors){
    return elt("div", {},...actors.map(actor => {
        let rect = elt("div", {class:`actor ${actor.type}`})
        rect.style.width = `${actor.size.x * scale}px`
        rect.style.height = `${actor.size.y * scale}px`
        rect.style.left = `${actor.pos.x * scale}px`
        rect.style.top = `${actor.pos.y * scale}px`
        return rect
    }))
}

// to give the element more then one class, seperate the class names by spaces
// the syncState method is used to make the display show a given state
// removes old actor graphics then redraws the actors in their new positions

DOMDisplay.prototype.syncState = function(state){
    if(this.actorLayer) this.actorLayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`
    this.scrollPlayerIntoView(state)
}

// find players position and update wrappingn element's scroll position

DOMDisplay.prototype.scrollPlayerIntoView = function(state){
    let width = this.dom.clientWidth;
    this.height = this.dom.clientHeight;
    let margin = width / 3;

    // the viewport
    let left = this.dom.scrollLeft, right = left + width;
    let top = this.dom.scrollTop, bottom = top + this.height
    
    let player = state.player;
    let center = player.pos.plus(player.size.times(.5)).times(scale)

    if(center.x < left + margin){
        this.dom.scrollLeft = center.x - margin
    } else if(center.x > right - margin){
        this.dom.scrollLeft = center.x + margin - width
    }

    if(center.y < top + margin){
        this.dom.scrollTop = center.y - margin
    } else if(center.y > bottom - margin){
        this.dom.scrollTop = center.y + margin - height
    }
};