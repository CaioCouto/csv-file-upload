const { Transactions, Imports } = require('../../Models');
const { csvToObject, deleteFile, printTransaction, analyseTransactions, xmlToObject, getTransactionTime } = require("../../utils");

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

function isDuplicate(datetime) {
    return Imports.listByDatetime(datetime);
}

async function dataIsValid(data) {
    const datetimeInMilliseconds = getTransactionTime(new Date(data[0].datetime))
    if(!data) return 'valid=0';
    else if (await isDuplicate(datetimeInMilliseconds)) return 'duplicate=1';
    return true;
}

class TransactionController {    
    static async register(req, res, next) {
        const { filename, fileType } = req.query;
        try {
            const data = fileType === 'text/xml' ? xmlToObject(filename) : csvToObject(filename);
            const result = await dataIsValid(data);
            if(typeof(result) !== 'string') {
                data.forEach(async transaction => {
                    printTransaction(transaction);
                    await transaction.register();
                });
            }
            deleteFile(filename);
            return res.redirect(`/reports?${result}`);
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
    
    static async delete(req, res, next) {
        const [ startDate, finalDate ] = getDayInterval(req.query.datetime);
        try {
            await Transactions.delete(startDate, finalDate);
            return res.redirect('/reports?internalError=1');
        } catch (error) {
            console.log(error);
            return res.status(500).json({});
        }
    }
};

module.exports = TransactionController;