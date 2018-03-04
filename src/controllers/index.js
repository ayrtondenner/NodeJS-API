'use strict'

exports.get = (req, res, next) => {
    res.status(200).send({
        title: 'Node Test API',
        description: 'A small NodeJS API for test purposes.',
        version: '1.2'
    })
};