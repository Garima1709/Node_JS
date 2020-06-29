let path =require('path')
let os= require('os')
let fs=require('fs')
let eventEmitter= require('events')
let http=require('http')

// ------ path module----------------
let parsePath= path.parse(__filename)
console.log(parsePath)
/* Output----->>
{ root: 'G:\\',
  dir: 'G:\\MyTech\\Node_JS\\Basics',
  base: 'modules.js',
  ext: '.js',
  name: 'modules' }

 */

//------------ os module-----------------
let totalMemory=os.totalmem()
console.log('Total OS Memory---->',totalMemory)
console.log(`Total Memory: ${totalMemory}`)   // with back ticks
let freeMemory=os.freemem()
console.log('Free Memory of the system--->',freeMemory)

//------------ FS(File System) module------------------------
// Sync Method-----
let files=fs.readdirSync('./')
console.log('Sync Files---->',files) // Gives a lit of files in current directory

// Async method----
fs.readdir('./',function (err,files) {
if(err) console.log('Error-->>',err)
    else console.log('Async Files---->',files)
})

//------------------------- Events module-----------------------
const emitter= new eventEmitter()

emitter.on('messageLogged',function () {
console.log('Listener called')
})

emitter.emit('messageLogged')

//------------------- http module-----------------------------------

const server=http.createServer(function (req,res) {
if(req.url==='/'){
    res.write('Hello World')
    res.end()
}
if(req.url==='/api'){
    res.write(JSON.stringify([1,2,3]))
}
});


// server.on('connection',(socket)=>{
//     console.log('New connection.....')
// })
server.listen(3000)
console.log('Listening on port 3000')

// -------------------- Joi---------------
/*
Joi i used to define the schema or rules for any input
 */




