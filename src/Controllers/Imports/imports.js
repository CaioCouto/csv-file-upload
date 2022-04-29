const { Imports } = require('../../Models');
const { getTransactionTime, deleteFile, csvToObject, xmlToObject } = require('../../utils');

class ImportsController {    
    static async create(req, res, next) {
        const { user } = req.session;
        const { filename, fileType } = req.query;
        try {
            const data = fileType === 'text/xml' ? xmlToObject(filename) : csvToObject(filename);
            if(!data) return res.redirect('/reports?valid=0');
            const imports = new Imports(
                getTransactionTime(data[0].datetime),
                user.id
            );
            await imports.register();
            req.session.transactions = data;
            return res.redirect(`/transactions/register?filename=${filename}`);    
        } catch (error) {
            console.log(error);
            deleteFile(filename);
            if(error.code === 'P2002') return res.redirect('/reports?duplicate=1');
            return res.status(500).json({});
        }
    }
    
    static async list(req, res, next) {
        try {
            const imports = await Imports.list();
            if (imports.length === 0) return res.status(404).json({});
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