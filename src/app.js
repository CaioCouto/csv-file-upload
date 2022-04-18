const cors = require('cors');
const express = require('express');

const { home, upload, transaction, imports } = require('./Views');

const app = express();
app.use(cors());
app.use(home);
app.use(upload);
app.use(imports);
app.use(transaction);

module.exports = { app };