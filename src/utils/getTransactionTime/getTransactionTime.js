function getTransactionTime(datetime) {
    /**
     * Returns the time, in miliseconds, of the
     * transaction's datetime string.
     */
    let [ year, month, date ] = datetime.toISOString().split('T')[0].split('-').map(v => Number(v));
    return new Date(year, month-1, date, 0, 0, 0).getTime();
}

module.exports = getTransactionTime;