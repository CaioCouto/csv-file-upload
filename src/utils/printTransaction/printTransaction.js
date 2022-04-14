function printTransaction(transaction) {
    /**
     * Prints transaction data onto the console.
     */
    const lines = () => console.log('='.repeat(60));
    lines();
    console.log("Transaction Information");
    console.log("Banco de Origem: " + transaction.originBank);
    console.log("Agencia de Origem: " + transaction.originAgency);
    console.log("Conta de Origem: " + transaction.originAccount);
    console.log("Banco de Destino: " + transaction.destinationBank);
    console.log("Agencia de Destino: " + transaction.destinationAgency);
    console.log("Conta de Destino: " + transaction.destinationAccount);
    console.log("Valor: " + transaction.amount);
    console.log("Feita em: " + transaction.datetime.toLocaleString());
    console.log("Registrada em: " + transaction.importedAt);
    lines();
}

module.exports = printTransaction;