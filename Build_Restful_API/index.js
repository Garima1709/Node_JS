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
const Joi= require('joi')

app.use(express.json())

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
    if(!course) {
        res.status(404).send('The course with given id not found')
        return
    }
    else
        res.send(course)
})

//--------------------------HTTP POST Request---------------------------
app.post('/api/courses', (req,res)=>{
    const schema ={
        name: Joi.string().min(3).required()
    }

    const result= Joi.validate(req.body, schema)
    console.log('Result---->',result)

    // if(!req.body.name)
    //     res.status(400).send('Name is required')

    // ------------------  After Joi
    if(result.error) {
        //res.status(400).send(result.error)
        res.status(400).send(result.error.details[0].message)
        return
    }
    const course= {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})



// Hit the url in postman to check  :  http://localhost:3000/api/courses

// --------------------- PUT Request---------------------------------

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id===parseInt(req.params.id))
    if(!course) {
        res.status(404).send('The course with given id not found')
        return
    }

    const schema ={
        name: Joi.string().min(3).required()
    }

    const result= Joi.validate(req.body, schema)
    if(result.error) {
        //res.status(400).send(result.error)
        res.status(400).send(result.error.details[0].message)
        return
    }
    // If course id is found, then ---> update course
     course.course = req.body.name
    res.send(course)

})

//----- Object de-structuring------------------------
/*
If a function returns 2 values  ex: error and value
const result= validateCourse(req.body)   ---> returns  error and value
then --- const result.error = const {error}
 */


// ------------------------Delete Request-----------------------------
app.delete('/api/courses/:id' , (req,res)=>{
    const course = courses.find(c=> c.id===parseInt(req.params.id))
    if(!course) {
        res.status(404).send('The course with given id not found')
        return
    }

    // Find index of the course you want to delete
    const index= courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
    
})



