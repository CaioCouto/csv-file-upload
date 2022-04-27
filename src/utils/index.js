const readFile = require("./readFile");
const sendMail = require("./sendMail");
const CSVexists = require("./CSVexists");
const getSrcDir = require("./getSrcDir");
const deleteFile = require("./deleteFile");
const csvToObject = require("./csvToObject");
const xmlToObject = require("./xmlToObject");
const printTransaction = require("./printTransaction");
const getTransactionTime = require("./getTransactionTime");
const filterTransactions = require("./filterTransactions");
const analyseTransactions = require("./analyseTransactions");
const getUploadDestinationDir = require("./getUploadDestinationDir");


module.exports = {
    readFile,
    sendMail,
    CSVexists,
    getSrcDir,
    deleteFile,
    csvToObject,
    xmlToObject,
    printTransaction,
    getTransactionTime,
    filterTransactions,
    analyseTransactions,
    getUploadDestinationDir,
}