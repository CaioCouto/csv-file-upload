function filterDuplicates(accounts) {
    accounts.forEach((acc, index) => {
        if(acc) {
            for (let i = 0; i < accounts.length; i++) {
                if (i === index || !accounts[i]) continue;
                const isSameBank = acc.bank === accounts[i].bank;
                const isSameAgency = acc.agency === accounts[i].agency;
                const isSameAccount = acc.number === accounts[i].number;
                if (isSameBank && isSameAgency && isSameAccount) {
                    delete accounts[i];
                }
            }
        }
    });
    return accounts.filter(acc => acc);
}

function gatherAllAccounts(transactions, type) {
    /**
     * Return an array with all information
     * regarding only the non-duplicated accounts:
     *  - the bank;
     *  - the agency number;
     *  - the account number.
     */
    const accounts = [];
    transactions.forEach(transaction => (
        accounts.push({
            bank: transaction[`${type}Bank`],
            agency: transaction[`${type}Agency`],
            number: transaction[`${type}Account`],
        })
    ));
    return filterDuplicates(accounts);
}

function returnTransactions(arr, type, account) {
    /**
     * Return an array with all transaction
     * related with the accounts.
     */
    return arr.filter(transaction => {
        const isSameBank = account.bank === transaction[`${type}Bank`];
        const isSameAgency = account.agency === transaction[`${type}Agency`];
        const isSameAccount = account.number === transaction[`${type}Account`];
        return isSameBank && isSameAgency && isSameAccount;
    });
}

function calculateTransactionsTotalAmount(transactions) {
    let total = 0;
    transactions.forEach(transaction => total += transaction.amount);
    return total
}

function returnSuspectedAccounts(data, type) {
    /**
     * Returns an array with the all 
     * account that moves over R$ 1 million (1.000.000 = 10^6).
     */
    const accounts = gatherAllAccounts(data, type);
    let suspectedAccounts = [];
    accounts.forEach(account => {
        const transactions = returnTransactions(data, type, account);
        const total = calculateTransactionsTotalAmount(transactions);
        const isSuspect = total >= 10**6;
        if (isSuspect) {
            suspectedAccounts.push({
                bank: account.bank,
                agency: account.agency,
                number: account.number,
                amount: total,
                type: type === 'origin' ? 'Saída' : 'Entrada'
            });
        }
    });
    return suspectedAccounts;
}

module.exports = returnSuspectedAccounts;