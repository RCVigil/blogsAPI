const authService = require('../services/login.service');

const validateToken = async (req, _res, next) => {
    const { authorization } = req.headers;
    const user = authService.validateToken(authorization);
    req.user = user;

    next();
};

module.exports = {
  validateToken,
};