const path = require('path');
const { readFileSync } = require('fs');
const getUploadDestinationDir = require('../getUploadDestinationDir');

function readCSV(filename) {
    const uploadDir = getUploadDestinationDir();
    return readFileSync(
        path.join(uploadDir, filename),
        {
            encoding:'utf-8',
            flag: 'r'
        }
    );
}

module.exports = readCSV;