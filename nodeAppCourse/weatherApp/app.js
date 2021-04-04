const request = require('request')
const geocode = require("./utils/geocode.js")
const forecast = require("./utils/forecast.js");
const yargs = require("yargs");
const {describe} = require("yargs");

yargs.version("1.1.0")

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

// process.argv retrieves the array of arguments entered into the command line
geocode(process.argv[2], (error, {latitude,longitude,locationn})=>{
    if(!process.argv[2]){
        return console.log("Please input a valid location.")
    }
    // console.log(yargs.argv.search)
    else if(error){
        return console.log("error", error)
    }
    else{
        // console.log("data", data)
        // Callback chaining 
        // Add a function and use the data provided by the previous callback in order to obtain a new callback return
        
        // location and current are objects called from the callback function
        forecast(latitude,longitude, (error, {location, current}) => {
            if(error){
                return console.log("error", error)
            }
            else{
                // data object is the data returned from geocode
                // console.log(data.location)
                // forecastData object is the data returned from the forecast function
                // console.log(forecastData.region)
                // console.log(forecastData.country)
                // console.log(forecastData.temp)
                // console.log(forecastData.precip)
                const {name, country,region,localtime} = location;
                const {weather_descriptions,temperature,precip} = current;
                
                console.log(`In ${name}, ${region}, ${country}`)
                console.log(`The weather is ${weather_descriptions[0]} out. It is currently ${temperature} degrees with ${precip}% chance of rain.`)

            }
        })
    }
})
    


yargs.parse()