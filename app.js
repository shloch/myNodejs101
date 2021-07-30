const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()

//connect to DB //cloud.mongodb.com (connect via gmail account)
const DB_URI = `mongodb+srv://shloch:shloch7566@cluster0.9mlyq.mongodb.net/Cluster0?retryWrites=true&w=majority`
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(3001)
        console.log("connected to DB")
    })
    .catch((console.error()))

app.set('view engine', 'ejs')

app.use(morgan('dev'))

// mongoose and mongo sandbox routes
app.get('/add-blog', (request, response) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    })
    blog.save()
    .then((result)=> {
        response.send(result)
    })
    .catch(error => console.log(error))
})

app.get('/all-blogs', (request, response) => {

    Blog.find()
    .then(result => {
        response.send(result)
    })
    .catch(error => console.log(error))
})


app.get('/single-blog', (request, response) => {
    Blog.findById('61044f8fc11a5da8a175047a')
    .then(result => {
        response.send(result)
    })
    .catch(error => console.log(error))
})
//middleware and static files
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.redirect('/blogs')
})

app.get('/about', (request, response) => {
    response.render('about', {title: 'About'})
})

// blog routes
app.get('/blogs', (request, response) => {
    Blog.find().sort({createdAt: -1}) //sort by descending order
    .then(result => {
        response.render('index', {title: 'all blogs', blogs: result})
    })
    .catch(error => {
        console.log(error)
    })
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

