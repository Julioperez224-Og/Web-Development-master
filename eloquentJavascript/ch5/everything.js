const odd = (e) => e % 2 === 1;

const everyF = (arr, f) =>{
    let checker = true
    arr.forEach(a=>{
        if(f(a)===false){
            checker = false
        }
    })
    if(checker===false){
        return false
    }
    else{
        return true
    }
}

const everyMethod = (arr,f)=>{
    return !arr.some(f)
}
console.log(everyMethod([3,5,3],odd))