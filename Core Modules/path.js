const path = require('path')
const myPath = 'C:/Windows/System32/cmd.exe'
console.log(path.basename(myPath))
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.parse(myPath))