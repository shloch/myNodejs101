const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

//connect to DB //cloud.mongodb.com (connect via gmail account)
const DB_URI = `mongodb+srv://shloch:shloch7566@cluster0.9mlyq.mongodb.net/Cluster0?retryWrites=true&w=majority`
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(3001)
        console.log("connected to DB")
    })
    .catch(error => console.log(error))


app.set('view engine', 'ejs')

//middleware and static files
app.use(express.static('public'))


app.use(express.urlencoded({ extended: true})) //to receive POST DATA
app.use(morgan('dev'))


app.get('/', (request, response) => {
    response.redirect('/blogs')
})

app.get('/about', (request, response) => {
    response.render('about', {title: 'About'})
})

app.use('/blogs', blogRoutes)

//404
app.use((request, response) => {
    response.status(404).render('404', {title: '404'})
})

