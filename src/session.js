const session = require('express-session');
const SessionStore = require('connect-sqlite3')(session);

const store = new SessionStore({
    db: 'db.db'
});

module.exports = {
    session,
    store
};