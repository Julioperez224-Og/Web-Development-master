
var movies = [
    {
        name :"Ace Ventura: Pet Detective",
        score: 77,
        genre: "Comedy",
        hasWatched: true
    },

    {
        name: "Harry Potter and the Philosopher\'s Stone",
        score: 85,
        genre: "Fantasy",
        hasWatched: true
    },

    {
        name: "Paul Blart",
        score: 33,
        genre: "Comedy",
        hasWatched: false
    }
]

for(var i = 0; i < movies.lenth; i++){
    if(movies[i].hasWatched == true){
        console.log("You have watched \'" + movies[i].name +"\' -" + score);
    }
    else{
        console.log("You have not watched0 \'" + movies[i].name +"\' -" + score);

    }
}



movies.forEach(function(movie){
    if(movie.hasWatched == true){
        console.log("You have watched \'" + movie.name +"\' -" + movie.score);
    }
    else{
        console.log("You have not watched \'" + movie.name +"\' -" + movie.score);

    }})
console.log("Hey")