const { User } = require('../models');

const getAll = async () => {
  const usuarios = await User.findAll();

  const todosUsuarios = usuarios.map((us) => {
    const data = {
      id: us.id,
      displayName: us.displayName,
      email: us.email,
      image: us.image,
    };
    return data;
  });

  return todosUsuarios;
};

const getServiceId = async (id) => {
  const usuarios = await User.findOne({ where: { id }, attributes: { exclude: ['password'] },
  });

  console.log('GETSERVICE-ID NO BANCO DE DADOS É', usuarios);
  return usuarios;
};

const addUSerService = async () => {
  console.log(' # # # # # ENTREI NA ADD_USER_SERVICE # # # # # #');
};

module.exports = {
  getAll,
  getServiceId,
  addUSerService,
};
