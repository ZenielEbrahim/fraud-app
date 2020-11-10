const add= (a, b, callback) =>{
    const sum = a + b;
    setTimeout(()=>{
        callback(sum)
    },3000)
}




add(1, 5, (sum)=>{
    console.log(sum)
})