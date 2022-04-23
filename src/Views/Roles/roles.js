const router = require('express').Router();

const { RolesController } = require('../../Controllers');

router.get('/roles', RolesController.list);

module.exports = router;