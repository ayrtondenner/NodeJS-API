'use strict';

const http = require('http');
const debug = require('debug')('nodestr:server');
const normalizePort = require('normalize-port')
const onError = require('on-error')
const app = require('../src/app')

//const port = 3000;
const port = normalizePort(process.env.port || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
console.log("Ouvindo na porta " + port + "...");