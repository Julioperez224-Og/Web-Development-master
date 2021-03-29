const request = require('request')
const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js");

// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//     }
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoianBlcmV6OTJpIiwiYSI6ImNrbW13amJsMDBiNXcycXJ6MDU0Z3kxbDUifQ.vDG-iUBFny9vCHI4J__CXw'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })


geocode("Boston ", (error, data)=>{
    if(error){
        console.log("error", error)
    }
    else{
        console.log("data", data)
    }
})

forecast(45.432,-73.234, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })