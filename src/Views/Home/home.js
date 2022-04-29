const router = require('express').Router();
const path = require('path');

const { getSrcDir } = require('../../utils');
const { validateSession, userIsLoggedIn } = require('../../middlewares');

const rootDir = getSrcDir();
const returnTemplatePath = (template) => path.join(rootDir, 'templates', `${template}.html`);

router.get('/reports/:id', validateSession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('details'));
});

router.get('/reports', validateSession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('imports'));
});

router.get('/analysis', validateSession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('analysis'));
});

router.get('/admin', validateSession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('admin'));
});

router.get('/', userIsLoggedIn, (req, res, next) => {
    return res.sendFile(returnTemplatePath('index'));
});

module.exports = { router };