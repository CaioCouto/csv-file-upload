const cors = require('cors');
const express = require('express');

const { home, upload, transaction } = require('./Views');

const app = express();
app.use(cors());
app.use(home);
app.use(upload);
app.use(transaction);

module.exports = { app };