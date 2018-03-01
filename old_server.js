'use restrict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');
const normalizePort = require('normalize-port')
const onError = require('on-error')

const app = express();
const port = normalizePort(process.env.port || '3000');
//const port = 3000; 
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Test API",
        version: "1.1"
    })
});

app.use('/', route);

server.listen(port); 
server.on('error', onError)
console.log("Ouvindo na porta " + port + "...");

