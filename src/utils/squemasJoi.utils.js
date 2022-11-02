const { getServiceEmail } = require('../services/user.service');

const validatedisplayNam = (req, res, next) => {
  const nameVerify = req.body.displayName;
  
  if (!nameVerify || nameVerify.length <= 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  
  next();
};

const validateEmail = (req, res, next) => {
  const emailVerify = req.body.email;
  const regEmail = (/\S+@\S+\.\S+/);
  
  if (!emailVerify || !regEmail.test(emailVerify)) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }
  
  next();
};

const validatePassword = (req, res, next) => {
  const passwordVerify = req.body.password;
  
  if (!passwordVerify || passwordVerify.length <= 5) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  
  next();
};

const validateDoubleEmail = async (req, res, next) => {
  const { email } = req.body;

  const userEmail = await getServiceEmail(email);

  if (userEmail) return res.status(409).json({ message: 'User already registered' });
  
  next();
};

module.exports = {
  validatedisplayNam,
  validateEmail,
  validatePassword,
  validateDoubleEmail,
};