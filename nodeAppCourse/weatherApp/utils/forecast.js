// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require("request");

const forecast = (lat,long,callback) =>{
    const url = `http://api.weatherstack.com/forecast?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=${lat},${long}&units=f`
    request({url:url, json:true}, (err,res) => {
        if(err){
            callback("Unable to connect to weatherstack", err);
        } 
        else if(isNaN(parseInt(lat)) || isNaN(parseInt(long))){
            callback("Location not found",err)
        }
        else{
            const toDate = res.body.location.localtime.substr(0,11);
            callback(undefined,{
                forecast: res.body.forecast
            })
        }
    })

}

module.exports = forecast;