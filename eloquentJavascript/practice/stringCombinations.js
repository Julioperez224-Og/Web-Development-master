function checkCombinations(word){

    for (let i = 0; i <= word.length; i++){
        for(let j = 1; j <= word.length; j++){
            console.log(word.slice(i,j))
        }
    }
}

checkCombinations("doggo")