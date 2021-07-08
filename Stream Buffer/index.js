const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head></html>')
        res.write('<body><form method="post" action="/process"><input name="message"/></form></body>')
        res.end()
    }
    else if (req.url === '/process' && req.method === 'POST') {

        const data=[]
        req.on('data', (chunk) => {
            data.push(chunk)       
        })
        res.write("I am fardin islam")
        res.end(() => {
            console.log("Operation ended!")
            const parsedData = Buffer.concat(data).toString()
            console.log(parsedData)
        })
    }
    else {
        res.write("Hello Bro!")
        res.end()
    }
})

server.listen('3000')

console.log('listening on port 3000')