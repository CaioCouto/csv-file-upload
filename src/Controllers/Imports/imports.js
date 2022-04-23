const { Imports } = require('../../Models');

class ImportsController {    
    static async list(req, res, next) {
        try {
            const imports = await Imports.list();
            return res.json(imports);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async listById(req, res, next) {
        const { id } = req.params;
        try {
            const imports = await Imports.listById(Number(id));
            return res.json(imports);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = ImportsController;