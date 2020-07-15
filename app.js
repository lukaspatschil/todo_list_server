'use strict';

const express = require('express');

const todos = require('./routes/todos');

const app = express();
app.use(express.json());

app.use('/', todos);

app.use((req, res, next) => {
    res.sendStatus(404);
});

module.exports = app;
