const returnSuspectedAccounts = require("./returnSuspectAccounts");
const returnSuspectedAgencies = require("./returnSuspectAgencies");

function gatherSuspectedAgencies(data) {
    /**
     * Returns an array with the all 
     * agencies that has moved over R$ 1 billion.
     * It doesn't matter if it was income or outcomes.
     */
    const origin = returnSuspectedAgencies(data, 'origin');
    const destination = returnSuspectedAgencies(data, 'destination');
    
    return [ ...origin, ...destination ];
}

function gatherSuspectedAccounts(data) {
    /**
     * Returns an array with the all 
     * accounts that has moved over R$ 1 million.
     * It doesn't matter if it was income or outcomes.
     */
    const origin = returnSuspectedAccounts(data, 'origin');
    const destination = returnSuspectedAccounts(data, 'destination');
    return [ ...origin, ...destination ];
}

function gatherSuspectTransactions(transactions) {
    /**
     * Returns an array with the transactions
     * that has and amount greater than or equal 
     * R$ 100.000,00 (100.000 = 10^5).
     */
    return transactions.filter(transaction => transaction.amount >= 10**5);
}

function analyseTransactions(transactions) {
    /**
     * Returns an array containing all the
     * analyzed transactions.
     */
    return {
        suspectAgencies: gatherSuspectedAgencies(transactions),
        suspectAccounts: gatherSuspectedAccounts(transactions),
        suspectTransactions: gatherSuspectTransactions(transactions)
    }
}

module.exports = analyseTransactions;