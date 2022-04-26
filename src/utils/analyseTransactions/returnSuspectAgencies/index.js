function filterDuplicates(agencies) {
    agencies.forEach((agency, index) => {
        if(agency) {
            for (let i = 0; i < agencies.length; i++) {
                if (i === index || !agencies[i]) continue;
                const isSameBank = agency.bank === agencies[i].bank;
                const isSameAgency = agency.agency === agencies[i].agency;
                if (isSameBank && isSameAgency) {
                    delete agencies[i];
                }
            }
        }
    });
    return agencies.filter(acc => acc);
}

function gatherAllAgencies(transactions, type) {
    /**
     * Return an array with all information
     * regarding only the non-duplicated agencies:
     *  - the bank;
     *  - the agency number;
     *  - the account number.
     */
    const agencies = [];
    transactions.forEach(transaction => (
        agencies.push({
            bank: transaction[`${type}Bank`],
            number: transaction[`${type}Agency`],
        })
    ));
    return filterDuplicates(agencies);
}

function returnTransactions(arr, type, agency) {
    /**
     * Return an array with all transaction
     * related with the agencies.
     */
    return arr.filter(transaction => {
        const isSameBank = agency.bank === transaction[`${type}Bank`];
        const isSameAgency = agency.number === transaction[`${type}Agency`];
        return isSameBank && isSameAgency;
    });
}

function calculateTransactionsTotalAmount(transactions) {
    let total = 0;
    transactions.forEach(transaction => total += transaction.amount);
    return total
}

function returnSuspectedAgencies(data, type) {
    /**
     * Returns an array with the all 
     * agency that moves over R$ 1 billion (1.000.000.000 = 10^9).
     */
    const agencies = gatherAllAgencies(data, type);
    let suspectedAgencies = [];
    agencies.forEach(agency => {
        const transactions = returnTransactions(data, type, agency);
        const total = calculateTransactionsTotalAmount(transactions);
        const isSuspect = total >= 10**9;
        if (isSuspect) {
            suspectedAgencies.push({
                bank: agency.bank,
                number: agency.number,
                amount: total,
                type: type === 'origin' ? 'Saída' : 'Entrada'
            });
        }
    });
    return suspectedAgencies;
}

module.exports = returnSuspectedAgencies;