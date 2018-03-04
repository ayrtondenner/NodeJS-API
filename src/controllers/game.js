'use strict';

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

exports.get = (req, res, next) => {
    Game.find({
        active: true
    }, 'name description')
    .then(x => {
        res.status(200).send(x);
    }).catch(e => {
        res.status(400).send(e);
    })    
};

exports.post = (req, res, next) => {
    var game = new Game(req.body);
    game.save().then(x => {
        res.status(201).send({
            id: game.id,
            name: game.name,
            description: game.description,
            stages: game.stages,
            competences: game.competences,
            active: game.active,
            message: 'Jogo "' + game.name + '" criado com sucesso!'
        })
    }).catch(e => {
        res.status(400).send({
            data: e,
            message: 'Erro ao salvar jogo!'
        })
    });
};

exports.put = (req, res, next) => {
    var gameName = req.body.gameName;
    var stages = req.body.stages;

    res.status(200).send({
        id: req.params.id,
        gameName: gameName,
        stages: stages,
        message: 'Jogo "' + gameName + '" atualizado com sucesso!'
    })
};

exports.delete = (req, res, next) => {
    var idGame = req.params.id;

    res.status(200).send({
        id: idGame,
        message: 'Jogo #' + idGame + ' deletado com sucesso!'
    })
};