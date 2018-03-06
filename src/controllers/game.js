'use strict';

const HttpStatusCode = require('http-status-codes');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const repository = require('../repositories/game')


exports.getActiveGames = async (req, res, next) => {
    try {
        var activeGames = await repository.getActiveGames();
        res.status(HttpStatusCode.OK).send(activeGames);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao procurar jogos!'
        });
    }
};

exports.getGamesBySlug = async (req, res, next) => {
    try {
        var games = await repository.getGamesBySlug(req.params.slug);
        res.status(HttpStatusCode.OK).send(games);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao procurar jogos!'
        });
    }
};

exports.getGamesByCompetences = async (req, res, next) => {
    try {
        var games = await repository.getGamesByCompetences(req.params.competences);
        res.status(HttpStatusCode.OK).send(games);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao procurar jogos!'
        });
    }
};

exports.getGamesById = async (req, res, next) => {
    try {
        var games = await repository.getGamesById(req.params.id);
        res.status(HttpStatusCode.OK).send(games);
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao procurar jogos!'
        });
    }
};

exports.createGame = async (req, res, next) => {
    try {
        var gameCreated = await repository.createGame(req.body);
        res.status(HttpStatusCode.CREATED).send({
            game: gameCreated,
            message: 'Jogo "' + gameCreated.name + '" criado com sucesso!'
        });
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao salvar jogo!'
        });
    }
};

exports.updateGame = async (req, res, next) => {
    try {
        var updatedGame = await repository.updateGame(req.body);
        res.status(HttpStatusCode.OK).send({
            game: updatedGame,
            message: 'Jogo "' + updatedGame.name + '" atualizado com sucesso!'
        });
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: "Erro ao atualizar o jogo!"
        });
    }
};

exports.deleteGame = async (req, res, next) => {
    try {
        await repository.deleteGame(req.body.id);
        res.status(HttpStatusCode.OK).send({
            message: 'Jogo excluído com sucesso!'
        });
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Jogo não foi excluído!'
        });
    }
};