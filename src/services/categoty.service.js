const { Category } = require('../models');

const addCategoryService = async ({ name }) => {
  const categoria = await Category.create({ name });
  console.log('SERVICE É      ===       ', categoria);

  return categoria;
};

const getAll = async () => {
  const categorias = await Category.findAll();

  const todascategorias = categorias.map((ct) => {
    const data = {
      id: ct.id,
      name: ct.name,
    };

    return data;
  });

  return todascategorias;
};

module.exports = {
  addCategoryService,
  getAll,
};