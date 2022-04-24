const { Imports } = require('../../Models');
const { getTransactionTime } = require('../../utils');

class ImportsController {    
    static async create(req, res, next) {
        const { date } = req.params;
        const imports = new Imports(getTransactionTime(new Date(date)));            
        await imports.register(req.session.user.id);
        res.redirect('/reports?valid=1');
    }
    
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