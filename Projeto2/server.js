const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var encomendaRouter = require('./routes/encomendaRoutes');
app.use('/', encomendaRouter);

app.listen(3000);