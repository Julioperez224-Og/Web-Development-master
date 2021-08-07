function multiplicationFailure(){}

function primitiveMultiply(a,b){
    const rNumber = Math.floor(Math.random() * 10) + 1
    if(rNumber < 3){
        return a * b;
    } else{
        throw new multiplicationFailure();
    }
}

function reliableMultiply(a,b){
    for(;;){
        try{
            return primitiveMultiply(a,b);
        } catch(e){
            if(e instanceof multiplicationFailure){
                console.log("Multiplication Failed")
            } else{
                throw e;
            }
        }
    }
}

console.log(reliableMultiply(3,4));