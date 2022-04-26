const { Transactions } = require('../../Models');
const { csvToObject, deleteCSV, printTransaction, analyseTransactions } = require("../../utils");

function getTimeInterval(month) {
    const currentYear = new Date(Date.now()).getFullYear();
    const startDate = new Date(currentYear, month, 1);
    const finalDate = new Date(currentYear, month+1, 0);
    return [ startDate, finalDate ];
}

class TransactionController {    
    static async register(req, res, next) {
        const { filename } = req.query;
        try {
            const data = csvToObject(filename);
            if(!data) return res.redirect('/reports?valid=0');
            data.forEach(async transaction => {
                printTransaction(transaction);
                await transaction.register();
            });
            return res.redirect(`/imports/register/${data[0].datetime}`);
        } catch (error) {
            console.log(error);
            deleteCSV(filename);
            if(error.code === 'P2002') return res.redirect(`/reports?duplicate=1`);
            return res.status(500);
        }
    }
    
    static async list(req, res, next) {
        let { date } = req.params;
        try {
            const startDate = new Date(date);
            const endDate = new Date(date);
            endDate.setDate(endDate.getDate()+1);
            const transactions = await Transactions.list(startDate, endDate);
            return res.json(transactions);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async analyse(req, res, next) {
        try {
            const month = Number(req.params.month);
            const [ startDate, finalDate ] = getTimeInterval(month);
            let transactions = await Transactions.list(startDate, finalDate);
            if(transactions.length === 0) return res.status(404).json();
            transactions = analyseTransactions(transactions);
            res.json(transactions);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = TransactionController;