
const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

// GET
router.get('/', (request, response) => {
    Blog.find().sort({createdAt: -1}) //sort by descending order
    .then(result => {
        response.render('index', {title: 'all blogs', blogs: result})
    })
    .catch(error => console.log(error))
})


router.get('/create', (request, response) => {
    response.render('create', {title: 'Create new blog'})
})

router.get('/:id', (request, response) => {
    const id = request.params.id
    console.log(request.params)
    Blog.findById(id)
    .then(result => {
        response.render('details', {blog: result, title: 'Blog Details'})
    })
    .catch(errors => console.log(errors))
})

// POST
router.post('/', (request, response) => {
    const blog = new Blog(request.body)
    blog.save()
    .then(result => response.redirect('/'))
    .catch(errors => console.log(errors))
 })
 

// DELETE
router.delete('/:id', (request, response) => {
    const id = request.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        response.json({redirectURL: '/blogs'})
    })
   .catch(errors => console.log(errors))
})

module.exports = router

