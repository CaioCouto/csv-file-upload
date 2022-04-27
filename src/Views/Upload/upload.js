const multer = require('multer');
const router = require('express').Router();

const { validateSession } = require('../../middlewares');

const { FormController } = require('../../Controllers');
const { storage, fileFilter } = require('../../multer');

const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

router.post('/upload', validateSession, upload.single('transactions'), FormController.upload);

module.exports = { router };