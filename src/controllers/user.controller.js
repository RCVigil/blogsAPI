const userService = require('../services/user.service');

const getAllUsers = async (_req, res) => {
  const buscaUser = await userService.getAll();

  return res.status(200).json(buscaUser);
};

const getUserId = async (req, res) => {
  const { id } = req.params;
  console.log('O ID É ===      ', id);
  const userId = await userService.getServiceId(id);
  
  if (!userId) {
    console.log('ENTREI NO USER_ID  **ERROR**');
    return res.status(404).json({ message: 'User does not exist' });
  } 
  console.log('#?#?#?#?#?  USER-ID #?#?#?#?#?#?#?', userId);
    return res.status(200).json(userId);
};

const addUser = async (req, res) => {
  console.log('Entrei no addUser');
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.addUSerService(displayName, email, password, image);

  return res.status(201).json({ newUser });
};

module.exports = {
  getAllUsers,
  getUserId,
  addUser,
};
