const express = require('express');
const { addCategory } = require('../controllers/category.controller');

const { validateToken } = require('../utils/jwt.util');

const router = express.Router();

router.post('/', validateToken, addCategory);

module.exports = router;