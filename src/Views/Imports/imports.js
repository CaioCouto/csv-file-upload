const router = require('express').Router();

const { validatesession } = require('../../middlewares');
const { ImportsController } = require('../../Controllers');

router.use(validatesession);

router.get('/imports', validatesession, ImportsController.list);
router.get('/imports/:id', validatesession,ImportsController.listById);
router.get('/imports/register/:date', validatesession, ImportsController.create);

module.exports = router;