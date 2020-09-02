const express = require('express'),
      router = express.Router(),
      blogController = require('../controllers/blogController');

// Index
router.get('/',blogController.blog_index)
// Create
router.get('/create',blogController.blog_crate_get)
// Store 
router.post('/',blogController.blog_create_post)
//Show single blog 
router.get('/:id',blogController.blog_details)
// Delete
router.delete('/:id',blogController.blog_delete)

module.exports = router