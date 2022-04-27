const { Imports } = require('../../Models');
const { getTransactionTime, deleteFile } = require('../../utils');

class ImportsController {    
    static async create(req, res, next) {
        const { date } = req.params;
        const { filename } = req.query;
        try {
            const imports = new Imports(getTransactionTime(new Date(date)));            
            await imports.register(req.session.user.id);
            return res.redirect('/reports?valid=1');    
        } catch (error) {
            console.log(error);
            deleteFile(filename);
            return res.redirect(`/transactions/delete?datetime=${getTransactionTime(new Date(date))}`);
        }
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