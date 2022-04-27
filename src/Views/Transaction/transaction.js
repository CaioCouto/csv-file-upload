const router = require('express').Router();

const { validateSession } = require('../../middlewares');
const { TransactionController } = require('../../Controllers');

router.use(validateSession)

router.get('/transactions/register', TransactionController.register);
router.get('/transactions/delete', TransactionController.delete);
router.get('/transactions/:date', TransactionController.list);
router.get('/transactions/analyse/:month', TransactionController.analyse);

module.exports = { router };