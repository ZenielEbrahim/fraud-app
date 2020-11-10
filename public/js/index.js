console.log('working')
const $form =document.querySelector('form')
const search =document.querySelector('input')
const place= document.getElementById('locationName')
const forecast = document.getElementById('forecast')
const temperature =document.getElementById('temperature')


$form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const address =search.value
    place.textContent= 'Loading...'
    forecast.textContent ="WHAT'S THE WEATHER LIKE TODAY?"
    temperature.textContent=''

    fetch(`http://localhost:3000/weather?address=${address}`).then(response=>{
    response.json().then(data=>{
        if(data.error){
            temperature.textContent=data.error
            place.textContent= ''
        }else{
         place.textContent = data.location
         console.log(data.data)
         forecast.textContent= data.data.description
         temperature.textContent= 'It is currently '+data.data.temperature+' degrees out.'


        }
    })
})

    
})












//  fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//      response.json().then((data)=>{
//          console.log(data)
//      })
//  })