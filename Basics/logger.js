// Example of how to export a module
let endPointUrl='https://mylogger.io/log'

function log(message){
    console.log(message)
}

// module.exports.log= log // to export a method
module.exports.url=endPointUrl    //will export the endPointUrl as name url
module.exports=log  // We can also export a single function