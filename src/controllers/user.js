'use strict';

const HttpStatusCode = require('http-status-codes');
const md5 = require('md5');
const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate');
const repository = require('../repositories/candidate');
const configuration = require('../config');
const emailSender = require('../services/email-service');

exports.createCandidate = async (req, res, next) => {
    try {
        var pass = req.body.password;
        var createdCandidate = await repository.createCandidate({
            candidatename: req.body.candidatename,
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + configuration.PASSWORD_KEY)
        });
        await emailSender.send(
            req.body.email,
            'Novo usuário criado',
            configuration.EMAIL_TEMPLATE.replace('{0}', req.body.name).replace('{1}', req.body.candidatename)
        );
        res.status(HttpStatusCode.OK).send({
            candidate: createdCandidate,
            message: 'Usuário ' + createdCandidate.name + ' com sucesso!'
        });
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).send({
            error: error,
            message: 'Erro ao criar o usuário!'
        })
    }
};
