const fs = require('fs')

const readstream = fs.createReadStream('./docs/blockstreamtext.txt')
const writestream = fs.createWriteStream('./docs/block4.txt')


// readstream.on('data', (chunk) => {
//     console.log('--new chunk--- ')
//     console.log(chunk.toString())
//     writestream.write('\nNEW CHUNK')
//     writestream.write(chunk)
// })

readstream.pipe(writestream)