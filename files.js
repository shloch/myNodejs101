const fs = require('fs')
//======read
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})

//=======write
fs.writeFile('./docs/blog1.txt', "hello world", () => {
    console.log('file was writen');
})
//========dir

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err)
        }
        console.log('folder created')
    })
}


//=========del files