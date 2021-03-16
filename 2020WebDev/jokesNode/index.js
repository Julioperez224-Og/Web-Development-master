// Must install both npms before using
const jokes = require("give-me-a-joke");
const colors = require("colors");
const cowsay = require("cowsay");
// console.dir(jokes);
// console.dir(colors);

// getRandomDatJoke is a function that can be called to get a dad joke
console.dir(cowsay)
jokes.getRandomDadJoke(function(joke){
    console.log(cowsay.say({
        text: joke.rainbow.bold,
        e: "0.o",
        T: "U"
    
    }));
})

// to install globally use the -g sign