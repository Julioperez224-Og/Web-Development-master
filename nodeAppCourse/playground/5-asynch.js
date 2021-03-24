console.log("Starting");

// run some code after x amount of time pasts
// Requires 2 parameters. A function and a number of time in ms
setTimeout(() => {
    console.log("2 sec timer")
},2000);

// Even though it has a 0 second timer is will still appear after starting and stopping console.logs
setTimeout(()=>{
    console.log("0 sec timer")
},0)

console.log("Stopping")