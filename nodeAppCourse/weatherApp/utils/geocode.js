const request = require("request");



const geocode = (address,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianBlcmV6OTJpIiwiYSI6ImNrbW13amJsMDBiNXcycXJ6MDU0Z3kxbDUifQ.vDG-iUBFny9vCHI4J__CXw`
        request({url:url,json:true}, (err, res)=>{
            // Checks if there is an error from the system
            if(err){
                // returns this error message if an error exists
                callback("Unable to connect to location services", undefined)
                // Checks if the features array is empty
            } else if(res.body.features.length === 0){
                // if so return an error that it was not found
                callback("Unable to find location. Try another search",undefined)
            } else{
                callback(undefined,{
                    latitude: res.body.features[0].center[1],
                    longitude: res.body.features[0].center[0],
                    location: res.body.features[0].place_name
                })
            }
            
        });
        
    }


module.exports = geocode;