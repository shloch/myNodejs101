const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const blogs = [
        {title: 'Lorem Ipsum has been the industry\'s standard dummy', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'typesetting, remaining essentially unchanged. It was popularised ', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'packages and web page', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    response.render('index', {title: 'Home', blogs: blogs })
})

app.get('/about', (request, response) => {
    response.render('about', {title: 'About'})
})

//redirect
app.get('/about-us', (request, response) => {
    response.redirect('/about')
})

app.get('/blogs/create', (request, response) => {
    response.render('create', {title: 'Create new blog'})
})

//404
app.use((request, response) => {
    response.status(404).render('404', {title: '404'})
})

app.listen(3001)