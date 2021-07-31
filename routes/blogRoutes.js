
const express = require('express')
const router = express.Router()
const blogcontroller = require('../controllers/blogController')

// GET
router.get('/', blogcontroller.blog_index)
router.get('/create', blogcontroller.blog_create_get)
router.get('/:id', blogcontroller.blog_details)

// POST
router.post('/', blogcontroller.blog_create_post)
 
// DELETE
router.delete('/:id', blogcontroller.blog_delete)


module.exports = router

