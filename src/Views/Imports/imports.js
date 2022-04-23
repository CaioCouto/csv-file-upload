const router = require('express').Router();

const { validatesession } = require('../../middlewares');
const { ImportsController } = require('../../Controllers');

router.use(validatesession);

router.get('/imports', validatesession, ImportsController.list);
router.get('/imports/:id', validatesession,ImportsController.listById);

module.exports = router;