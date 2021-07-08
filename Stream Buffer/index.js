const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const readText= fs.createReadStream(`${__dirname}/Text data/text.txt`)
    readText.pipe(res)
})
server.listen('3000')
console.log("Server listening at 3000")