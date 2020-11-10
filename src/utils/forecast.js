 const request = require('request')

const forecast = (latitude, longitude, callback)=>{
     let units= 'm'
    const url = `http://api.weatherstack.com/current?access_key=7f281f3eaacc6e8156d089c44b7d7481&query=?${latitude},${longitude}&units=${units}`;

    request({url,json:true},(error, {body})=>{
   if(error){
       callback('Unable to connect to service')
   }else if(body.error){
       callback('Invalid, please try another search')
   }else{
       const weather =body.current;
           const weatherData= {
               description :weather.weather_descriptions[0],
               windSpeed : weather.wind_speed,
               windDirection: weather.wind_dir,
               humidity:weather.humidity,
               precipitation:weather.precip,
               temperature:weather.temperature
           }
           callback(undefined, weatherData)
   }
    })
}




 module.exports = forecast