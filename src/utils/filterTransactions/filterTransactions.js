const getTransactionTime = require("../getTransactionTime");

function filterNullAndUndefined(data) {
    /**
     * Returns an array with the data
     * that have all the columns different
     * from falsy values.
     */
    return data.filter(datum => {
        for(v of Object.values(datum)) if(!v) return false;
        return true;
    });
}

function filterMissingFields(data) {
    /**
     * Returns an array with the data
     * that have all the expected columns.
     */
    const expectedColumns = [
        'originBank',
        'originAgency',
        'originAccount',
        'destinationBank',
        'destinationAgency',
        'destinationAccount',
        'amount',
        'datetime',
    ];
    return data.filter(datum => {
        for(f of expectedColumns) if (Object.keys(datum).indexOf(f) === -1) return false;
        return true;
    });
}

function filterInvalidTimes(data) {
    /**
     * By the time, this function is called, it's guaranteed 
     * that all the data have all the expected columns.
     * 
     * Returns all data that have the transaction time equals
     * to the first register's time.
     */
    const firstValidTransactionTime = getTransactionTime(data.shift().datetime);
    return data.filter(datum => getTransactionTime(datum.datetime) === firstValidTransactionTime);
}

function filterTransactions(data) {
    /**
     * Returns an array containing all the
     * validated data.
     */
    let validTransactions = filterNullAndUndefined(data);
    validTransactions = filterMissingFields(validTransactions);
    validTransactions = filterInvalidTimes(validTransactions);
    return validTransactions;
}

module.exports = filterTransactions;