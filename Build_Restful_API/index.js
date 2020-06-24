/*
REST: Representational State Transfer
CRUD Operations:
C - Create  - POST
R - Read - GET
U - Update  - PUT
D - Delete  - DELETE
 */

const express= require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello Garima!!!')
})



// To get the id/parameters of a request
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})

// Multiple parameters in a route
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(`Your Search----- ${JSON.stringify(req.params)}`)
})

// Query String parameters--- to sort the result ----  http://localhost:3000/api/posts/2018/1?sortBy=name
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.query)  // Will display your query  ---- {"sortBy":"name"}
})

// app.listen(3000,()=>{
//     console.log('Listening on port 3000')
// })

// To get the free port at run time----->
const port= process.env.port || 3000
app.listen(port,()=>{
    console.log(`Listening on port ${port}...`)
})

/*
To change the port----  set PORT=5000(windows)   export PORT=5000(mac)
 */

/*
nodemon ----- It is a node_modeule that re-starts the server automatically every time any change is made in the file
Do --- npm install -g nodemon(install it globally)
Then -- nodemon index.js in place of node index.js
 */


//--------------------- HTTP GET Request -----------------------
const courses=[
    {id:1, course:'JavaScript'},
    {id:2, course:'NodeJS'}
]

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
 const course = courses.find(c=> c.id===parseInt(req.params.id))
    if(!course)
        res.status(404).send('The course with given id not found')
    else
        res.send(course)
})

//--------------------------HTTP POST Request---------------------------
// app.post()




