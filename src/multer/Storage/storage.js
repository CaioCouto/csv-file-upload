const multer = require("multer");

const { getTodayDate, getUploadDestinationDir } = require("../../utils");
const destinationDir = getUploadDestinationDir();

module.exports = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})