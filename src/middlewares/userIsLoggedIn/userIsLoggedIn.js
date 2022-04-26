function userIsLoggedIn(req, res, next) {
    if(req.session.user) return res.redirect('/reports');
    next();
}

module.exports = userIsLoggedIn;