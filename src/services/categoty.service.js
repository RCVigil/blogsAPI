const { Category } = require('../models');

const addCategoryService = async ({ name }) => {
  const categoria = await Category.create({ name });
  console.log('SERVICE É      ===       ', categoria);

  return categoria;
};
module.exports = {
  addCategoryService,
};