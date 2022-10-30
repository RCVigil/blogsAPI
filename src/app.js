const express = require('express');
require('express-async-errors');
const errorMidleware = require('./middlewares/error');

// ...
const routes = require('./routers/router');

const app = express();

app.use(express.json());

// ...
app.use(routes);

app.use(errorMidleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
