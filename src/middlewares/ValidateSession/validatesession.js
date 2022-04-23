function validateSession(req, res, next) {
    if(!req.session.user) return res.redirect('/?auth=0');
    next();
}

module.exports = validateSession;