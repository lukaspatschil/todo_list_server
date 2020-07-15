'use strict';

const app = require('./app');
const port = process.argv.length >= 3 ? +process.argv[2] : 3000;

app.listen(port, () =>
    console.log(`Server is listening on http://localhost:${port}`)
);