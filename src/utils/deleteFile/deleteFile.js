const path = require('path');
const { rmSync } = require('fs');
const getUploadDestinationDir = require('../getUploadDestinationDir');

function deleteFile(filename) {
    const uploadDir = getUploadDestinationDir();
    return rmSync(path.join(uploadDir, filename));
}

module.exports = deleteFile;