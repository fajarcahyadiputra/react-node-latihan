const router = require('express').Router();
const PostController = require('../controllers/PostController')

router.get('/', PostController.getPosts);
router.post('/', PostController.createPost);

module.exports = router;