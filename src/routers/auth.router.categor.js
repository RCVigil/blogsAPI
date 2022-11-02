const express = require('express');
const { addCategory, getCategory } = require('../controllers/category.controller');

const { validateToken } = require('../utils/jwt.util');

const router = express.Router();

router.post('/', validateToken, addCategory);

router.get('/', validateToken, getCategory);

module.exports = router;