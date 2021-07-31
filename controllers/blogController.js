// blog_index, blod_details, blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blog')


// GET
const blog_index = (request, response) => {
    Blog.find().sort({createdAt: -1}) //sort by descending order
    .then(result => {
        response.render('blogs/index', {title: 'all blogs', blogs: result})
    })
    .catch(error => console.log(error))
}

const blog_details = (request, response) => {
    const id = request.params.id
    console.log(request.params)
    Blog.findById(id)
    .then(result => {
        response.render('blogs/details', {blog: result, title: 'Blog Details'})
    })
    .catch(errors => {
        response.status(404).render('404', {title: 'Blog Not Found'})
    })
}


const blog_create_get = (request, response) => {
    response.render('blogs/create', {title: 'Create new blog'})
}


// POST
const blog_create_post = (request, response) => {
    const blog = new Blog(request.body)
    blog.save()
    .then(result => response.redirect('/'))
    .catch(errors => console.log(errors))
}

// DELETE
const blog_delete = (request, response) => {
    const id = request.params.id
    Blog.findByIdAndDelete(id)
    .then(result => {
        response.json({redirectURL: '/blogs'})
    })
   .catch(errors => console.log(errors))
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}