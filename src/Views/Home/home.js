const router = require('express').Router();
const path = require('path');

const { getSrcDir } = require('../../utils');
const rootDir = getSrcDir();

router.get('/', (req, res, next) => {
    return res.sendFile(path.join(rootDir, 'templates', 'index.html'));
});

module.exports = { router };