'use strict';

const HttpStatusCode = require('http-status-codes');
const md5 = require('md5')
const mongoose = require('mongoose');
const User = mongoose.model('User');
const repository = require('../repositories/user');
const configuration = require('../config')

exports.createUser = async (req, res, next) => {
    try {
        var pass = req.body.password;
        var createdUser = await repository.createUser({
            username: req.body.username,
            name: req.body.name,
            password: md5(req.body.password + configuration.PASSWORD_KEY)
        });
        res.status(HttpStatusCode.OK).send({
            user: createdUser,
            message: 'Usuário ' + createdUser.name + ' com sucesso!'
        });
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao criar o usuário!'
        })
    }
};
