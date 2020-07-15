'use strict';

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(root);
});

module.exports = routes;