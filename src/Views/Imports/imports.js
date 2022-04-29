const router = require('express').Router();

const { validateSession } = require('../../middlewares');
const { ImportsController } = require('../../Controllers');

router.use(validateSession);

router.get('/imports/register', ImportsController.create);
router.get('/imports/:id',ImportsController.listById);
router.get('/imports', ImportsController.list);


module.exports = router;