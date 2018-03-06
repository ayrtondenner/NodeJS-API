'use strict';

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

exports.getActiveGames = async () => {
    var games = await Game.find({
        active: true,
    }, 'name description')

    return games;
};

exports.getGamesBySlug = async (slug) => {
    var games = await Game.findOne({
        slug: slug
    }, 'name description');

    return games;
};

exports.getGamesByCompetences = async (competences) => {
    var games = await Game.find({
        competences: competences,
        active: true
    }, 'name description')

    return games;
};

exports.getGamesById = async (id) => {
    var games = await Game.findById(id);

    return games;
};

exports.createGame = async (gameBody) => {
    var savedGame = await new Game(gameBody).save();
    return savedGame;
};

exports.updateGame = async (gameBody) => {
    var updatedGame = await Game.findByIdAndUpdate(gameBody.id, {
        $set: {
            name: gameBody.name,
            slug: gameBody.slug,
            description: gameBody.description,
            stages: gameBody.stages,
            competences: gameBody.competences,
            active: gameBody.active
        }
    }, { new: true }) // Para retornar o novo objeto atualizado

    return updatedGame;
};

exports.deleteGame = async (id) => {
    var deletedGame = await Game.findByIdAndRemove(id);
    return deletedGame;
};