const request = require("request")
const yargs = require("yargs");
// const {describe} = require("yargs");

yargs.version("1.1.0")

// Use to retrieve information from the console
yargs.command({
    command: "location",
    describe: "User input a location to be geocoded",
    builder: {
        title: {
            describe: "Name of the location",
            demandOption: true,
            type:"string"
        }
    },
    // Handler isn't running for somereason
    handler (){
        const url = `${url_weather}&query=${geoCode()}`
        request({url:url}, (error, response) =>{
            console.log(response.body)
        })
    }
})

// retrieve the location that was input from the user
const decodeLocation = yargs.argv.location

// Starting point for weather app site and access key
const url_weather = "http://api.weatherstack.com/current?access_key=1846aa4f06cbc24bb9c2a8a2ad0fd3b1"
// Starting point for mapbox not including key
const url_mapbox = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
// Mapbox access key
const token_mapbox = "access_token=pk.eyJ1IjoianBlcmV6OTJpIiwiYSI6ImNrbW13amJsMDBiNXcycXJ6MDU0Z3kxbDUifQ.vDG-iUBFny9vCHI4J__CXw"

// mapbox full url with the location added from the console
const url = `${url_mapbox}${decodeLocation}.json?${token_mapbox}`
// const url2 =`${url_weather}&query=${decodeLocation}`



// Call the mapbox and get data as json 
request({url:url, json:true}, (error, response) => {
    if(error){
        console.log("Couldn't connect to mapbox")
    }
    else{
        // set a new url with the coordinates provided by mapbox but invert the coordinates. mapbox gives it in a way that weatherStack does not like
        const url = `${url_weather}&query=${response.body.features[0].geometry.coordinates[1]},${response.body.features[0].geometry.coordinates[0]}&units=f`;
        // Call a new request with the url, it is call be a weatherstack json file
        request({url:url, json:true}, (error, response)=>{
            if(error){
                console.log("Couldn't connect to weatherstack")
            } 
            // If there is an error that is located in the response you can use an if statement to check
            else if(response.body.error){
                console.log("Unable to find location")
            }            
            
            
            else
            {
                 // create different weather variables with the responses
                const temp = response.body.current.temperature;
                const precip = response.body.current.precip; 
                const location = response.body.location.name;
                const state = response.body.location.region;
                const country = response.body.location.country;
                // log the output to the user
                
                console.log(`It is ${temp} degrees out with ${precip}% chance of rain in ${location}, ${state}, ${country}`)
            }
        })
    }
    

})


yargs.parse();