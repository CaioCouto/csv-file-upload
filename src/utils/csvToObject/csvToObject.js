const readFile = require("../readFile");
const deleteFile = require("../deleteFile");
const filterTransactions = require("../filterTransactions");
const { Transactions } = require("../../Models");

function gatherData(lines) {
    const data = [];
    lines.forEach(line => {
        const information = line.split(',');
        data.push(new Transactions(information));
    });
    return data;
}

function csvToObject(filename) {
    try {
        const lines = readFile(filename).split('\n');
        if (lines.length <= 1) return !!deleteFile(filename);
        const data = gatherData(lines);
        return filterTransactions(data);
    } catch (error) {
        return false;
    }
    
};

module.exports = csvToObject;