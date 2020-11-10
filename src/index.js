const path= require('path')
const hbs = require('hbs')
const express = require('express')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials') 

app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



app.get('',(req,res) =>{
    res.render('index')
})

app.get('/about',(req,res) =>{
    res.render('about')
})
app.get('/weather',(req, res)=>{
    if(!req.query.address){
      return  res.send({error:'You must provide an address'})
    }


 
 geocode(req.query.address, (error, {latitude, longitude, location}={})=>{
    if(error){
   return     res.send({error:error})
    }
    forecast(latitude, longitude, (error, data)=>{
        if( error){
            res.send(error)
        }
        res.send({data, location})
    })
})
 


})
app.get('/*',(req,res) =>{
res.render('error')
})



app.listen(port, console.log('server up on port' + port))