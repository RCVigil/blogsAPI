const express = require('express');

// ...
const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

// ...
app.get('/user', User.getAll);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
