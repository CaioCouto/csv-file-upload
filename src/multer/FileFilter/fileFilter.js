const { CSVexists } = require("../../utils");

const fileFilter = (req, file, cb) => {
    const dataExists = CSVexists(file.originalname);
    if(!dataExists) return cb(null, true);
    else {
        req.duplicate = true;
        return cb(null, false);
    };
}

module.exports = fileFilter;