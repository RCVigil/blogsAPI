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

const addUSerService = async () => {
  console.log(' # # # # # ENTREI NA ADD_USER_SERVICE # # # # # #');
};

module.exports = {
  getAll,
  addUSerService,
};
