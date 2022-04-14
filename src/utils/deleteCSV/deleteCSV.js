const path = require('path');
const { rmSync } = require('fs');
const getUploadDestinationDir = require('../getUploadDestinationDir');

function deleteCSV(filename) {
    const uploadDir = getUploadDestinationDir();
    return rmSync(path.join(uploadDir, filename));
}

module.exports = deleteCSV;