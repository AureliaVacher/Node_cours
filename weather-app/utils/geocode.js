const getGeocode = (adress, callback) => {
    const uriAdress = encodeURIComponent(adress);
    const url = ("https://api.mapbox.com/geocoding/v5/mapbox.places/" + uriAdress + ".json?access_token=pk.eyJ1IjoiYXVyZWxpYXZhY2hlciIsImEiOiJjanU4bnNtaG4wNGQ0NDRwbThwbmhvcHZhIn0.bHcJDZjzP_Yna0008KNfUw")
    const request = require('request');

    request({url:url, json:true}, function (error, response, body) {
        //json=true remplace le JSON.PARSE
        if(error){
            callback('Unable to process the request', undefined);
        }else {
            callback(undefined, body)
            // recupérer features
        }
    });
};

module.exports = { 
    getGeocode: getGeocode
}