const { Transactions } = require('../../Models');
const { csvToObject, deleteCSV, printTransaction } = require("../../utils");

class TransactionController {    
    static register(req, res, next) {
        const { filename } = req.query;
        try {
            const data = csvToObject(filename);
            if(!data) {
                console.log('Não existem transações registradas no arquivo enviado.');
                return res.redirect('/?valid=0');
            }
            data.forEach(async transaction => {
                printTransaction(transaction);
                await transaction.register();
            })
            return res.redirect(`/?valid=1`);
        } catch (error) {
            console.log(error);
            deleteCSV(filename);
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