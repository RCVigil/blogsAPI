const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  const buscaUser = await userService.getAll();

  return res.status(200).json(buscaUser);
};

const addUser = async (req, res) => {
  console.log('Entrei no addUser');
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.addUSerService(displayName, email, password, image);

  return res.status(201).json({ newUser });
};

module.exports = {
  getAllUsers,
  addUser,
};
