'use strict';

const express = require('express');
const { ValidationError } =require('express-validation');

const todos = require('./routes/todos');

const app = express();
app.use(express.json());

app.use('/todo', todos);

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
   
    return res.status(500).json(err)
  })

app.use((req, res, next) => {
    res.sendStatus(404);
});

module.exports = app;
