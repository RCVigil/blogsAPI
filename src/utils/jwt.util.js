require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};

const validateToken = (req, _res, next) => {
  const data = req.headers.authorization;
  // console.log('DATA do validateToken é   ===   ', data);

  if (!data) {
    const err = new Error('Token not found');
    err.status = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(data, process.env.JWT_SECRET);
    req.user = payload;
    // console.log('O PAYLOAD NO JWT.UTILS É ===   ', payload);
    return next();
  } catch (error) {
    const err = new Error('Expired or invalid token');
    err.status = 401;
    return next(err);
  }
};

module.exports = { createToken, validateToken };