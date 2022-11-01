const Joi = require('joi');

const validatedisplayNam = (params) => {
  console.log('*************** VALIDEI O DISPLAY_NAME *****************', params);
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
  });

  const { error, value } = schema.validate(params);
  
  if (error) {
    const errorData = {
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
    throw errorData;
  }

  return value;
};

const validateEmail = (params) => {
  console.log('*************** VALIDEI O E-MAIL *****************');
  const schema = Joi.object({
    email: Joi.string().alphanum().email().required(),
  });
  
  const { error, value } = schema.validate(params);
  
  if (error) {
    const errorData = {
      status: 400,
      message: '"email" must be a valid email',
    };
    throw errorData;
  }
  
  return value;
};

const validatePassword = (params) => {
  console.log('*************** VALIDEI O PASSWORD *****************');
  const schema = Joi.object({
    password: Joi.string().alphanum().min(6).required(),
  });
  
  const { error, value } = schema.validate(params);
  
  if (error) {
    const errorData = {
      status: 400,
      message: '"password" length must be at least 6 characters long',
    };
    throw errorData;
  }
  
  return value;
};

module.exports = {
  validatedisplayNam,
  validateEmail,
  validatePassword,
};