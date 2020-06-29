/*
A middleware function is a function that takes a request object and either returns response to the client, or passes control to other middleware function
Route handlers like this are examples of middleware
app.get('/',(req,res)=>{
    res.send('Hello Garima!!!')
})

As they return response to the client
 */