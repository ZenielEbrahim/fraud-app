
const geocode = require('./geocode')
const forecast = require('./forecast')


const address = process.argv[2]
if(address){
    geocode(address, (error, {latitude, longitude, location})=>{
        if(error){
            return {error:error}
        }
       
         forecast(latitude, longitude, (error, data)=>{
             if( error){
                 return error
             }
             console.log({data, location})
         })
         })
}else{
    console.log('Please provide an address')
}

    
    


