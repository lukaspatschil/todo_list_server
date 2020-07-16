'use strict';

const express = require('express');
const routes = express.Router();

const todos = [];
todos.push({
    title: 'New todo', 
    description: 'This is a new todo',
    completed: false
});

routes.get('/', (req, res) => {
    if (req.query.q !== null) {
        const index = Number(req.query.q);
        if (index < todos.length && index > -1) {
            res.send(todos[index]);
            return;
        }
    }

    res.send(todos);
});

routes.post('/', (req, res) => {
    // TODO: add validation for todo
})

module.exports = routes;