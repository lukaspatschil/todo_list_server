'use strict';

const express = require('express');
const { validate, Joi } = require('express-validation');

const routes = express.Router();

const todos = [];
const todoSchema = {
    body: Joi.object({
        name: Joi.string()
            .required(),
        description: Joi.string()
    }),
};

todos.push({
    id: 0,
    name: 'New todo', 
    description: 'This is a new todo',
    completed: false
});

// get the todo
routes.get('/', (req, res) => {
    if (req.query.q) {
        const index = Number(req.query.q);
        if (index < todos.length && index > -1) {
            res.send(todos[index]);
            return;
        } else {
            res.sendStatus(404);
        }
    }

    res.send(todos);
});

// create a new todo
routes.post('/', validate(todoSchema, {}, {}), (req, res) => {
    const todo = {
        id: todos.length,
        name: req.body.name,
        description: req.body.description,
        completed: false
    };

    todos.push(todo);
    res.send(todo);
});

// complete the todo
routes.post('/complete', (req, res) => {
    if (!req.query.q) {
        res.sendStatus(400);
        return;
    }
    const index = Number(req.query.q);
    if (index < 0 && index > todos.length - 1) {
        res.sendStatus(404);
        return;
    }

    todos[index].completed = !todos[index].completed;
    res.send(todos[index]);
})

module.exports = routes;