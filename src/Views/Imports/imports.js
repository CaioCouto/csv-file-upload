const router = require('express').Router();

const { validatesession } = require('../../middlewares');
const { ImportsController } = require('../../Controllers');

router.use(validatesession);

router.get('/imports', ImportsController.list);

module.exports = router;