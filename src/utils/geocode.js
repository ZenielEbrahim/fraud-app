
const request = require("request");

const geocode = (address, callback)=>{

    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
)}.json?access_token=pk.eyJ1IjoiemVuaWVsIiwiYSI6ImNrOGZ2bXJkYTA2eWwzZG1ra3BuMngzZzEifQ.Tfdp1W8ZlIq0LTgdghg5jA`;

request({url, json:true}, async(error, {body}={})=>{
if(error){
callback(('Unable to connect to weather service'))
}else if(!body.features.length){
callback(('Please try another search'))
}else{
    const data = await body.features[0]
    const geocodeData = {
                    location:data.place_name,
                    longitude:data.center[0],
                    latitude:data.center[1]        
                }


callback(undefined,geocodeData)
}

})

}

module.exports = geocode