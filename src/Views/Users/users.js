const router = require('express').Router();

const { UsersController } = require('../../Controllers');
const { validatesession } = require('../../middlewares');

router.post('/users', validatesession, UsersController.register);
router.post('/users/login', UsersController.login);

router.get('/users', validatesession, UsersController.list);
router.get('/users/logout', validatesession, UsersController.logout);

router.put('/users/update/:id', validatesession, UsersController.update);

router.delete('/users/:id', validatesession, UsersController.delete);
module.exports = router;