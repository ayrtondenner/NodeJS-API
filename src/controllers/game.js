'use strict';

var HttpStatusCode = require('http-status-codes');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const repository = require('../repositories/game')


exports.getActiveGames = (req, res, next) => {
    repository
        .getActiveGames()
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.getGamesBySlug = (req, res, next) => {
    repository
        .getGamesBySlug(req.params.slug)
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.getGamesByCompetences = (req, res, next) => {
    repository
        .getGamesByCompetences(req.params.competences)
        .then(x => {
            res.status(HttpStatusCode.OK).send(x)
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e)
        });
};

exports.getGamesById = (req, res, next) => {
    repository.getGamesById(req.params.id)
        .then(x => {
            res.status(HttpStatusCode.OK).send(x);
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send(e);
        })
};

exports.createGame = (req, res, next) => {
    repository
        .createGame(req.body)
        .then(x => {
            res.status(HttpStatusCode.CREATED).send({
                game: x,
                message: 'Jogo "' + x.name + '" criado com sucesso!'
            })
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send({
                data: e,
                message: 'Erro ao salvar jogo!'
            })
        });
};

exports.updateGame = (req, res, next) => {
    repository
        .updateGame(req.body).then(x => {
            res.status(HttpStatusCode.OK).send({
                game: x,
                message: 'Jogo "' + x.name + '" atualizado com sucesso!'
            })
        }).catch(e => {
            res.status(HttpStatusCode.BAD_REQUEST).send({
                data: e,
                message: "Erro ao atualizar o jogo!"
            })
        });
};

exports.deleteGame = (req, res, next) => {
    repository
        .deleteGame(req.body.id)
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