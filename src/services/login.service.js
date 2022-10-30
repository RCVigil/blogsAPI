const Joi = require('joi');
const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
  // console.log('O params de validateBody é: ', params);
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(params);

  if (error) {
    const errorData = {
      status: 400,
      message: 'Some required fields are missing',
    };
    throw errorData;
  }

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  console.log('LS.22 =   ', user);

  if (!user || user.password !== password) {
    const e = {
      status: 400,
      message: 'Invalid fields',
    };
    throw e;
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const validateToken = (token) => {
  if (!token) {
    const e = new Error('Token obrigatório!');
    e.name = 'Token obrigatório';
    throw e;
  }

  const user = jwtUtil.validateToken(token);

  return user;
};

module.exports = { validateBody, validateLogin, validateToken };
