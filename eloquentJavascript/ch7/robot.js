var roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

// builds graphs from the roads provided
function buildGraph(edges){
    // create an object to hold the maps
    let graph = Object.create(null)

    // creates a function with 2 parameters from and to
    function addEdge(from,to){
        // from is the key and you must check if from is empty or not and add the value to
        if(graph[from] == null){
            // adds the initial key value if from is null
            graph[from] = [to]
        }else{
            // pushes a new value if from is already present in the object
            graph[from].push(to)
        }
    }

    // loops through the edges/roads provided and splits them into two
    for(let [from,to] of edges.map(r=> r.split("-"))){
        // runs the function and adds the key value pair
        addEdge(from,to);
        addEdge(to,from)
    }
    // return the graph when all is done
    return graph;
}

// run the buildGraph with the data in roads
const roadGraph = buildGraph(roads)

// The Task

// create a class that will store the village's state
class VillageState{
    // the constructor creates required parameters
    constructor(place,parcels){
        this.place = place;
        this.parcels = parcels;
    }

    // create a function move with the parameter destination
    // it will check the roadGraph to see if a key has a destination which means it checks to see if a road is going to a destination
    // if not it will return this/the old state since its not a valid move
    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        } else{
            // if else parcels will be picked up at that new location
            let parcels = this.parcels.map(p =>{
                if(p.parcels != this.place){
                    return p;
                } else{
                    return {place:destination,address:p.address}
                }
            }).filter(p=>p.place != p.address);
            return new VillageState(destination,parcels)
        }
    }
}