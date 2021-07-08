const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Heollo fardin!")
        res.write("How are you?")
        res.end()
    }
    else if(req.url === '/about'){
        res.write("I am fardin islam")
        res.end()
    }
    else {
        res.write("Hello Bro!")
        res.end()
    }
})

server.listen('3000')

console.log('listening on port 3000')