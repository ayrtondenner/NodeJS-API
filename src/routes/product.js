'use restrict'

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send({
        id: Math.random(),
        gameName: req.body.gameName,
        stages: req.body.stages,
        message: 'Jogo "' + req.body.gameName + '" criado com sucesso!'
    })
});

router.put('/:id', (req, res, next) => {
    var gameName = req.body.gameName;
    var stages = req.body.stages;

    res.status(200).send({
        id: req.params.id,
        gameName: gameName,
        stages: stages,
        message: 'Jogo "' + gameName + '" atualizado com sucesso!'
    })
});

router.delete('/:id', (req, res, next) => {
    var idGame = req.params.id;

    res.status(200).send({
        id: idGame,
        message: 'Jogo #' + idGame + ' deletado com sucesso!'
    })
});

module.exports = router;