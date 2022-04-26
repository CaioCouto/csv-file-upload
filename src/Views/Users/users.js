const router = require('express').Router();

const { UsersController } = require('../../Controllers');
const { validateSession } = require('../../middlewares');

router.post('/users', validateSession, UsersController.register);
router.post('/users/login', UsersController.login);

router.get('/users', validateSession, UsersController.list);
router.get('/users/logout', validateSession, UsersController.logout);

router.put('/users/update/:id', validateSession, UsersController.update);

router.delete('/users/:id', validateSession, UsersController.delete);
module.exports = router;