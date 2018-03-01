'use strict'

const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Test API',
        description: 'A small NodeJS API for test purposes.',
        version: '1.2'
    })
});

const createGame = router.post('/', (req, res, next) => {
    res.status(201).send({
        id: Math.random(),
        gameName: req.body.gameName,
        stages: req.body.stages,
        message: 'Jogo "' + req.body.gameName + '" criado com sucesso!'
    })
});

const updateGame = router.put('/:id', (req, res, next) => {
    var gameName = req.body.gameName;
    var stages = req.body.stages;

    res.status(200).send({
        id: req.params.id,
        gameName: gameName,
        stages: stages,
        message: 'Jogo "' + gameName + '" atualizado com sucesso!'
    })
});

const deleteGame = router.delete('/:id', (req, res, next) => {
    var idGame = req.params.id;

    res.status(200).send({
        id: idGame,
        message: 'Jogo #' + idGame + ' deletado com sucesso!'
    })
});

app.use('/', route);
app.use('/game', createGame);
app.use('/game', updateGame);
app.use('/game', deleteGame);

module.exports = app;