const fs = require('fs')

const readText = fs.createReadStream(`${__dirname}/Text data/text.txt`)
const writeText = fs.createWriteStream(`${__dirname}/Text data/outputText.txt`)

readText.pipe(writeText)