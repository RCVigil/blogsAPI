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

const getServiceEmail = async (email) => {
  console.log('EMAIL NA SERVICE:      ', email);
  const emailOne = await User.findOne({ where: { email }, attributes: { exclude: ['password'] },
  });

  return emailOne;
};

const addUSerService = async ({ displayName, email, password, image }, next) => {
  const emailDb = await User.findOne({ where: { email } });

  if (emailDb) {
    const err = new Error({ message: 'User already registered' });
    err.status = 409;
    return next(err);
  }

  await User.create({ displayName, email, password, image });
};

module.exports = {
  getAll,
  getServiceId,
  getServiceEmail,
  addUSerService,
};
