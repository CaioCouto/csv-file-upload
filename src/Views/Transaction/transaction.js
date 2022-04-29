const router = require('express').Router();

const { validateSession } = require('../../middlewares');
const { TransactionController } = require('../../Controllers');

router.use(validateSession)

router.get('/transactions/analyse/:month', TransactionController.analyse);
router.get('/transactions/register', TransactionController.register);
router.get('/transactions/:date', TransactionController.list);

module.exports = { router };