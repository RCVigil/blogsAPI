const express = require('express');
const { getBlogPostControl } = require('../controllers/blogPost.controller');

const { validateToken } = require('../utils/jwt.util');

const router = express.Router();

router.get('/', validateToken, getBlogPostControl);

module.exports = router;