'use strict';

var HttpStatusCode = require('http-status-codes');

exports.get = (req, res, next) => {
    res.status(HttpStatusCode.OK).send({
        title: 'Node Test API',
        description: 'A small NodeJS API for test purposes.',
        version: '1.2'
    })
};