const router = require('express').Router();

const { ImportsController } = require('../../Controllers');

router.get('/imports', ImportsController.list);

module.exports = router;