const fs = require("fs")
var a = fs.readFileSync(process.argv[2])  
var res = a.toString().split('\n').length - 1  
console.log(res)