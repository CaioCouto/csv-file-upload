const router = require('express').Router();

const { TransactionController } = require('../../Controllers');

router.get('/transactions/register', TransactionController.register);
router.get('/transactions', TransactionController.list);

module.exports = { router };