const fs = require('fs')

const readText= fs.createReadStream(`${__dirname}/Text data/text.txt`, 'utf8')

readText.on('data', (data) => {
    console.log(data)
})
