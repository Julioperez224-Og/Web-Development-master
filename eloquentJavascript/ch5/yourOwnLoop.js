const ownForLoop = (start,test,update,body) =>{
    for(let value = start; test(value); value = update(value)){
        body(value)
    }
}


ownForLoop(3, n => n > 0, n => n - 1, console.log)
