const express = require('express');
const authRouterUser = require('./auth.router.user');
const authRouterLogin = require('./auth.router.login');

const routers = express.Router();

// adiciona login
routers.use('/login', authRouterLogin);

// adiciona user
routers.use('/user', authRouterUser);

module.exports = routers;
