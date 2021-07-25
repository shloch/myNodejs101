const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (request, response) => {
    response.sendFile('./views/about.html', { root: __dirname })
})

//redirect
app.get('/about-us', (request, response) => {
    response.redirect('/about')
})

//404
app.use((request, response) => {
    response.sendFile('./views/404.html', { root: __dirname })
})

app.listen(3001)