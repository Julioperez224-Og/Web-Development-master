const request = require("request");
// Adding parameter units=f returns farenheit instead of Celsius
const url = "http://api.weatherstack.com/current?access_key=1846aa4f06cbc24bb9c2a8a2ad0fd3b1&query=40.7128,-74.0060&units=f"

// set JSON to true within the object to get the data auto parsed
request({url:url, json:true}, (error, response)=>{
    // const data = JSON.parse(response.body)
    console.log(`Tonight is ${response.body.current.weather_descriptions[0]} out. It is currently ${(response.body.current.temperature)} degrees. There is a ${response.body.current.precip}% chance of rain`)
})