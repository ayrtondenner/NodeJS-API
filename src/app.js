'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Carrega rotas
const indexRoutes = require('./routes/index');
const gameRoutes = require('./routes/game');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/game', gameRoutes);

mongoose.connect('mongodb://localhost:27017/?')

module.exports = app;