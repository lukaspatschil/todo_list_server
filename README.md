# todo_list_server
A samll server for todo lists with REST and in memory database

## Usage

Run `npm install`.

After installing npm start the local server with `npm run start`.

## API
There are three endpoints:

### GET `/todo?q={id}`

Gets all todos or the one specified by the id in `q`.

### POST `/todo`

Create a new todo in the database:

```json
{
    "name": "new todo",
    "description": "this is a new todo"
}
```

`title` is required, `description` is not.

### POST `/todo/complete?q={id}`

Switches the value `completed` of the todo with the id of `q`.
