// // A callback function is a function called within another function
// setTimeout(
//     // This is the callback function
//     ()=>{
//     console.log("2 Seconds passed")
// },2000)

// const names = ['Julio','jen','fizer','ben'];
// // the anonymous function within the filter function is the callback function in this instance
// const shortNames = names.filter((name) => {
//     return name.length < 5
// })



// // cannot return data within a asynch function
// // You must use a callback function to retrieve the data within it
// const geocode = (address, callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
        
//         // 
//         callback(data)
//     },2000)
    
// }

// geocode("Philadelphia", (data) => {
//     console.log(data)
// })

// Quiz time
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b,callback) => {
    setTimeout(()=>{
        const sum = a+b;
        callback(sum)
    },1000)
}

add(1,4,(sum) => {
    console.log(sum)
})