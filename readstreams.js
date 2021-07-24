const fs = require('fs')

const readstream = fs.createReadStream('./docs/blockstreamtext.txt')

readstream.on('data', (chunk) => {
    console.log('--new chunk--- ')
    console.log(chunk.toString())
})