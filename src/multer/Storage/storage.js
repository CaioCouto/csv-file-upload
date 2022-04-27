const multer = require("multer");

const { getUploadDestinationDir } = require("../../utils");
const destinationDir = getUploadDestinationDir();

module.exports = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})