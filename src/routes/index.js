'use restrict'

const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Test API',
        description: 'A small NodeJS API for test purposes.',
        version: '1.2'
    })
});

module.exports = router;