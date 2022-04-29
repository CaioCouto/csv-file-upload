const { Transactions } = require('../../Models');
const { deleteFile, analyseTransactions, printTransaction } = require("../../utils");

function getDayInterval(datetime) {
    const startDatetime = new Date(Number(datetime));
    const finalDatetime = new Date(Number(datetime));
    finalDatetime.setDate(startDatetime.getDate()+1);
    return [ startDatetime, finalDatetime ];
}

function getMonthInterval(month) {
    const currentYear = new Date(Date.now()).getFullYear();
    const startDate = new Date(currentYear, month, 1);
    const finalDate = new Date(currentYear, month+1, 0);
    return [ startDate, finalDate ];
}

class TransactionController {    
    static async register(req, res, next) {
        const { transactions } = req.session;
        const { filename } = req.query;
        try {
            transactions.forEach(async transaction => {
                printTransaction(transaction);
                await new Transactions(Object.values(transaction)).register();
            });
            return res.redirect(`/reports?valid=1`);
        } catch (error) {
            console.log(error);
            deleteFile(filename);
            return res.status(500).json({});
        }
    }
    
    static async list(req, res, next) {
        const [ startDate, finalDate ] = getDayInterval(new Date(req.params.date).getTime());
        try {
            const transactions = await Transactions.list(startDate, finalDate);
            return res.json(transactions);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async analyse(req, res, next) {
        try {
            const month = Number(req.params.month);
            const [ startDate, finalDate ] = getMonthInterval(month);
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