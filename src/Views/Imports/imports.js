const router = require('express').Router();

const { validateSession } = require('../../middlewares');
const { ImportsController } = require('../../Controllers');

router.use(validateSession);

router.get('/imports', ImportsController.list);
router.get('/imports/:id',ImportsController.listById);
router.get('/imports/register/:date', ImportsController.create);

module.exports = router;