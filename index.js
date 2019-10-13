const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); //using middlewares
app.use(bodyParser.json()); //using middlewares

app.use(express.static(__dirname + '/public'))

const server = http.createServer(app); // createServer

app.listen(port, hostname, () => { // Host Server
    console.log(`Server running at http://${hostname}:${port}`)
});