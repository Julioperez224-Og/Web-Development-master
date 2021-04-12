const greeter = (name="Enter") => {
    if(name === "Enter"){
        console.log("Enter a name")
    }
    else {
        console.log("Hey "+name)
    }      
}

// console.log(process.argv)

greeter(process.argv[2])