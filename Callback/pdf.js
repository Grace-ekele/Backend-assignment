const fs = require('fs')
file = fs.readFileSync('./mypdffile.pdf')
console.log(file.toString())

