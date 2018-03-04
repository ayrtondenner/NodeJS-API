'use strict';

var HttpStatusCode = require('http-status-codes');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');


exports.get = (req, res, next) => {
    Game.find({
        active: true
    }, 'name description')
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.getBySlug = (req, res, next) => {
    Game.findOne({
        slug: req.params.slug
    }, 'name description')
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.getByCompetences = (req, res, next) => {
    Game.find({
        competences: req.params.competences,
        active: true
    }, 'name description')
        .then(x => {
            res.status(HttpStatusCode.OK).send(x)
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e)
        });
};

exports.getById = (req, res, next) => {
    Game.findById(req.params.id)
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.post = (req, res, next) => {
    var game = new Game(req.body);
    game.save().then(x => {
        res.status(HttpStatusCode.CREATED).send({
            id: game.id,
            name: game.name,
            description: game.description,
            stages: game.stages,
            competences: game.competences,
            active: game.active,
            message: 'Jogo "' + game.name + '" criado com sucesso!'
        })
    }).catch(e => {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            data: e,
            message: 'Erro ao salvar jogo!'
        })
    });
};

exports.put = (req, res, next) => {

    var reqBody = req.body;

    Game.findByIdAndUpdate(reqBody.id, {
        $set: {
            name: reqBody.name,
            slug: reqBody.slug,
            description: reqBody.description,
            stages: reqBody.stages,
            competences: reqBody.competences,
            active: reqBody.active
        }
    }).then(x => {
        res.status(HttpStatusCode.OK).send({
            id: reqBody.id,
            name: reqBody.name,
            stages: reqBody.stages,
            active: reqBody.active,
            message: 'Jogo "' + reqBody.name + '" atualizado com sucesso!'
        })
    }).catch(e => {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            data: e,
            message: "Erro ao atulizar o jogo!"
        })
    });
};

exports.delete = (req, res, next) => {

    var reqBody = req.body;

    Game.findByIdAndRemove(reqBody.id)
    .then(x =>
        res.status(HttpStatusCode.OK).send({
            message: 'Jogo excluído com sucesso!'            
        })
    )
    .catch(e => {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            message: 'Jogo não foi excluído!'
        })
    })
};