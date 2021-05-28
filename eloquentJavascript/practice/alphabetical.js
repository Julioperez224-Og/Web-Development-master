function alphabeticalOrder(word){
    
    const wordArr = word.toLowerCase().split("");
    const newArr = wordArr[0]

    for(let i = 1; i < wordArr.length; i++){
        for(let j = 0; j < wordArr.length; j++){
            if(wordArr[i].charCodeAt(0) <= newArr[j].charCodeAt(0)){
                newArr.splice(j,0,wordArr[i])
            }
        }
    }
    
   return newWord;
}

console.log(alphabeticalOrder("Hey"))