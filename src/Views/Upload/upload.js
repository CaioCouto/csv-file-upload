const multer = require('multer');
const router = require('express').Router();

const { FormController } = require('../../Controllers');
const { storage, fileFilter } = require('../../multer');

const upload = multer({
    fileFilter: fileFilter,
    storage: storage
});

router.post('/upload', upload.single('transactions'), FormController.upload);

module.exports = { router };