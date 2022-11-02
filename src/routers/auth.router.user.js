const express = require('express');
const { getAllUsers, getUserId, addUser } = require('../controllers/user.controller');
const { validateToken } = require('../utils/jwt.util');
const { validatedisplayNam, validateEmail,
  validatePassword, validateDoubleEmail } = require('../utils/squemasJoi.utils');

const router = express.Router();

router.post('/', validatedisplayNam, validateEmail,
validatePassword, validateDoubleEmail, addUser);

router.get('/', validateToken, getAllUsers);

router.get('/:id', validateToken, getUserId);

module.exports = router;