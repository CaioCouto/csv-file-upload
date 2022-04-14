const path = require('path');
const getSrcDir = require('../getSrcDir');

function getUploadDestinationDir() {
    const root = path.dirname(getSrcDir());
    return path.join(root, 'uploads');
};

module.exports = getUploadDestinationDir;