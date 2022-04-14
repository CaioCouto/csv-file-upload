const path = require('path');

function getSrcDir() {
    return path.dirname(path.dirname(__dirname));
};

module.exports = getSrcDir;