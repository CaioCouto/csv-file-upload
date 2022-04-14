const path = require('path');
const { existsSync } = require('fs');
const getUploadDestinationDir = require('../getUploadDestinationDir');

function CSVexists(filename) {
    const uploadDir = getUploadDestinationDir();
    return existsSync(path.join(uploadDir, filename));
}

module.exports = CSVexists;