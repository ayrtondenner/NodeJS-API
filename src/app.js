'use strict'

const express = require('express')

const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Test API',
        description: 'A small NodeJS API for test purposes.',
        version: '1.2'
    })
});

app.use('/', route)

module.exports = app;