const { xml2js } = require('xml-js');

const readXML = require("../readXML");
const deleteFile = require("../deleteFile");
const filterTransactions = require("../filterTransactions");
const { Transactions } = require("../../Models");

function getTransactions(filename) {
    let fileData = readXML(filename);
    fileData = xml2js(
        fileData, 
        { 
            compact: true,
            ignoreComment: true,
            alwaysChildren: true 
        }
    );
    return fileData.transacoes.transacao;
}

function gatherData(transactions) {
    const data = [];
    transactions.forEach(transaction => {
        const information = [];
        for(entries of Object.entries(transaction)) {
            const [ category, info ] = entries;
            if(category === 'origem' || category === 'destino') {
                for(v of Object.values(info)) information.push(v._text);
                continue;
            }
            information.push(info._text);
        }
        data.push(new Transactions(information));
    });
    return data;
}

function xmlToObject(filename) {
    try {
        const transactions = getTransactions(filename);
        if (transactions.length < 1) return !!deleteFile(filename);
        const data = gatherData(transactions);
        return filterTransactions(data);
    } catch (error) {
        return false;
    }
    
};

module.exports = xmlToObject;