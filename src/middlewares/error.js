const error = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Erro inesperado. Por favor, tente mais tarde';
  console.log(' =.=.=.=.=. Status é de ERROR.JS na linha 4', status, '=> e a message é', message);
  return res.status(status).json({ message });
};

module.exports = error;