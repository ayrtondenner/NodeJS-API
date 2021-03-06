'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configuration = require('./config')

const app = express();
const router = express.Router();

//Carrega modelos
const Game = require('./models/game');
const Candidate = require('./models/candidate');

//Carrega rotas
const indexRoutes = require('./routes/index');
const gameRoutes = require('./routes/game');
const candidateRoutes = require('./routes/candidate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/games', gameRoutes);
app.use('/candidates', candidateRoutes);

mongoose.connect(configuration.MONGODB_CONNECTION_STRING);

module.exports = app;