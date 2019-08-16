const getWeather = (latitude, longitude, callback) => {
    const url = ("https://api.darksky.net/forecast/36d09688c88951d404bc243d4bff57fa/" + latitude + "," + longitude + "?lang=fr&units=si")
    const request = require('request');
    request({url:url, json:true}, function (error, response, body) {
        //json=true remplace le JSON.PARSE
        if(error){
            callback('Unable to process the request', undefined);
        }else {
            // let longitude = data.features[0].center[0];
            // let latitude = data.features[0].center[1];
            // callback (undefined, {
            //     longitude: longitude,
            //     latitude: latitude
            // })
            callback(undefined, body);
            // si error null, donc undefined
        }
    });
};

module.exports = { 
    getWeather: getWeather
}

//creer une fonction pour recuperer longitude et lattitude de jeru dans un autre module et l'export en disant le nom de la ville avec le truc de geo caching