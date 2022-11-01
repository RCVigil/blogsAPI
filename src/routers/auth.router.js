const express = require('express');
const loginController = require('../controllers/login.controller');
const { validateToken } = require('../utils/jwt.util');
const userController = require('../controllers/user.controller');
const validatingValues = require('../utils/squemasJoi.utils');

const router = express.Router();

router.post('/', loginController.addLogin);

router.post('/',
  validatingValues.validatedisplayNam,
  validatingValues.validateEmail,
  validatingValues.validatePassword,
  userController.addUser);

router.get('/', validateToken, userController.getAllUsers);

// router.get('/user/:id', userController);

module.exports = router;