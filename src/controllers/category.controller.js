const { addCategoryService, getAll } = require('../services/categoty.service');

const addCategory = async (req, res) => {
  const nameCat = req.body;

  if (!nameCat.name) res.status(400).json({ message: '"name" is required' });

  const categoria = await addCategoryService(nameCat);

  console.log('CATEFORIA NA CONTROLLER ', categoria);

  return res.status(201).json(categoria);
};

const getCategory = async (_req, res) => {
  const buscaCategory = await getAll();

  return res.status(200).json(buscaCategory);
};

module.exports = {
  addCategory,
  getCategory,
};