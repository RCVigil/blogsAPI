const express = require('express');
const authRouter = require('./auth.router');

const routers = express.Router();

// adiciona login
routers.use('/login', authRouter);

// adiciona user
routers.use('/user', authRouter);

module.exports = routers;
