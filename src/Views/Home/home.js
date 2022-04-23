const router = require('express').Router();
const path = require('path');

const { getSrcDir } = require('../../utils');
const { validatesession } = require('../../middlewares');
const rootDir = getSrcDir();

const returnTemplatePath = (template) => path.join(rootDir, 'templates', `${template}.html`);

router.get('/reports', validatesession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('imports'));
});

router.get('/report/:id', validatesession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('details'));
});

router.get('/', (req, res, next) => {
    return res.sendFile(returnTemplatePath('index'));
});

router.get('/admin', validatesession, (req, res, next) => {
    return res.sendFile(returnTemplatePath('admin'));
});

module.exports = { router };