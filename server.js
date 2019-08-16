const express = require('express');

//  Router File

const server = express();

server.use(express.json());
//  Router Endpoint

module.exports = server;