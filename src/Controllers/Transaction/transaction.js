const { Transactions, Imports } = require('../../Models');
const { csvToObject, deleteCSV, printTransaction, getTransactionTime } = require("../../utils");

class TransactionController {    
    static async register(req, res, next) {
        const { filename } = req.query;
        try {
            const data = csvToObject(filename);
            if(!data) {
                console.log('Não existem transações registradas no arquivo enviado.');
                return res.redirect('/?valid=0');
            }

            const imports = new Imports(getTransactionTime(data[0].datetime));            
            await imports.register(req.session.user.id);
            data.forEach(async transaction => {
                printTransaction(transaction);
                await transaction.register();
            })
            return res.redirect(`/imports?valid=1`);
        } catch (error) {
            console.log(error);
            deleteCSV(filename);
            if(error.code === 'P2002') {
                return res.redirect(`/imports?duplicate=1`);
            }
            return res.status(500);
        }
    }
    
    static async list(req, res, next) {
        try {
            const transactions = await Transactions.list();
            return res.json(transactions);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = TransactionController;