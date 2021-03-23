// Asynchronous Programming
const request = require("request");
// const url = "http://api.weatherstack.com/";
// const accessKey = "1846aa4f06cbc24bb9c2a8a2ad0fd3b1";

const url = "http://api.weatherstack.com/current?access_key=1846aa4f06cbc24bb9c2a8a2ad0fd3b1&query=40.7128,-74.0060";

// calls a request to the url
// requires 2 parameters an object with the url and a function with error and response parameters
request({url:url}, (error,response) => {
    const data = JSON.parse(response.body);
    console.log(data.current)
});