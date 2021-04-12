// Client side JS
// We will use Fetch for JS requests


// fetch data from JSON http request
// the response is stored in response
fetch("http://puzzle.mead.io/puzzle").then((response)=>{
    // response is parsed to json and stored in data
    response.json().then((data)=>{
        console.log(data.puzzle)
    })
})

// fetch("http://localhost:3000/weather/?address=Boston").then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.forecast)
//             console.log(data.address)
//             console.log(data.temperature)
//         }
        
//     })
// })

const weatherform = document.querySelector("form");
const weatherInput = document.querySelector("input")
const h1 = document.querySelector("h1");
weatherform.addEventListener("submit", (e)=>{
    e.preventDefault()
    let address = `http://localhost:3000/weather/?address=${weatherInput.value}`
    fetch(address).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data.forecast)
                console.log(data.address)
                console.log(data.temperature)
            }
            
        })
    })
})