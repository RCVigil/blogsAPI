const { addCategoryService } = require('../services/categoty.service');

const addCategory = async (req, res) => {
  const nameCat = req.body;

  if (!nameCat.name) res.status(400).json({ message: '"name" is required' });

  const categoria = await addCategoryService(nameCat);

  console.log('CATEFORIA NA CONTROLLER ', categoria);

  return res.status(201).json(categoria);
};

module.exports = {
  addCategory,
};