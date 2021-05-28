function palindrome(word){
    let test2 = word.split("").reverse().join("");

    if(word == test2){
        return true
    }
    else{
        return false
    }

}

console.log(palindrome("bob"))