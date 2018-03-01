'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega rotas
const indexRoutes = require('./routes/index')
const productRoutes = require('./routes/product')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/game', productRoutes)

module.exports = app;