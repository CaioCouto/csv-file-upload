const router = require('express').Router();

const { TransactionController } = require('../../Controllers');

router.get('/transactions/register', TransactionController.register);
router.get('/transactions/:date', TransactionController.list);

module.exports = { router };