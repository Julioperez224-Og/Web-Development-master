

const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // Resolve is called if things worked
        resolve([1,4,5])

        // reject is called if there is an error
        reject("Things went wrong")
    },2000)
}); 


doWorkPromise.then((result)=>{
    console.log("Success",result)
}).catch((error)=>{
    console.log("Error: ", error)
})