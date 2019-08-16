//const url = 'https://api.darksky.net/forecast/36d09688c88951d404bc243d4bff57fa/37.8267,-122.4233?lang=fr&units=si'
//? rajout - & en plus dans url
// pour les requete, utilisé une abstractin -> module request
//var request = require('request');
// request({url:url, json:true}, function (error, response, body) {
//     //json=true remplace le JSON.PARSE
//     if(error){
//         console.log('unable to process the request');
//     }else {
//         console.log(body.daily.data[0].summary +" ,La température est de ", body.currently.temperature, "°C");
//         console.log("Le risque de pluie est de ", body.currently.precipProbability, "%");
//     }
// });


const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

let callbackGeocode = (error, data) => {
    if(error){
        console.log(error);
    } else {
        const longitude = data.features[0].center[0];
        const latitude = data.features[0].center[1];
        console.log(data.features[0].text);
        console.log("Latitude : " + latitude + " - Longitude : " +longitude);
        weather.getWeather(latitude,longitude, (error, data) => {
            if(error){
                console.log(error);
            } else {
                console.log(data.daily.data[0].summary +" La température est de ", data.currently.temperature, "°C.");
                console.log("Le risque de pluie est de ", data.currently.precipProbability, "%.");
            }
        });
    } 
};

geocode.getGeocode('Royat', callbackGeocode);