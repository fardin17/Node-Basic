const fs = require('fs')
fs.writeFileSync('text-1', 'Hello, this is fardin islam.')
fs.appendFileSync('text-1', 'I tried to learn node.js')
const text = fs.readFileSync('text-1')
console.log(text.toString())