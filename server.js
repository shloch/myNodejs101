const http = require('http')
const fs = require('fs')
<<<<<<< HEAD
const _ = require('lodash')
const { log } = require('console')
=======
>>>>>>> 4b8e9b02f9d91727736d8297c929043c89121155

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)

<<<<<<< HEAD
    //lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() =>{
        console.log("hello")
    })
    greet()
    greet()

=======
>>>>>>> 4b8e9b02f9d91727736d8297c929043c89121155
    //set header content type
    response.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200
            break;
<<<<<<< HEAD
        case '/about-us':
=======
        case '/about-me':
>>>>>>> 4b8e9b02f9d91727736d8297c929043c89121155
            response.statusCode = 301
            response.setHeader('Location', '/about')
            response.end()
            break;
        default:
            path += '404.html';
            response.statusCode = 404
            break;

    }

    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            response.end()
        }
        response.write(data)
        response.end()
    })
    
})

server.listen(3001, 'localhost', () =>{
    console.log('listening for requests on port 3001')
})