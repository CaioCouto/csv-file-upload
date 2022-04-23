const cors = require('cors');
const express = require('express');

const { session, store } = require('./session');
const { home, upload, transaction, imports, users, roles } = require('./Views');

const app = express();

app.disable('x-powered-by');

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 's3cr3t', // env var
    name: 'sessionId',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    store: store,
    cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour (in milliseconds)
        httpOnly: false
    },
}));

// Routes
app.use(home);
app.use(roles);
app.use(users);
app.use(upload);
app.use(imports);
app.use(transaction);

module.exports = { app };