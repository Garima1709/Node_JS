function hello(name){
    console.log('Hello '+name)
}
console.log("Hello to Jenkins")
hello('Garima')

console.log("Hello to Jenkins")

/*
window and document are the part of run time environment in browser
They will not get executed in node js
 */
// console.log(window)    // Will give error

/*
In node js - Every file is a module and the functions and variables defined in that module, are scope to that module.
That is they cannot be accessed outside the module unless that module is exported
 */

console.log(__filename) // prints current file name
console.log(__dirname) // prints current directory name
