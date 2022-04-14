const readCSV = require("../readCSV");
const deleteCSV = require("../deleteCSV");
const filterTransactions = require("../filterTransactions");
const { Transactions } = require("../../Models");

function csvToObject(filename) {
    try {
        const lines = readCSV(filename).split('\n');
        if (lines.length <= 1) return !!deleteCSV(filename);
        const data = [];
        lines.forEach(line => {
            const information = line.split(',');
            data.push(new Transactions(information));
        });
        return filterTransactions(data);
    } catch (error) {
        return false;
    }
    
};

module.exports = csvToObject;