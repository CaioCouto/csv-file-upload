function evaluateData(suspectAccounts, suspectAgencies, suspectTransactions) {
    return new function() {
        this.noSuspectAccounts = suspectAccounts.length === 0,
        this.noSuspectAgencies = suspectAgencies.length === 0, 
        this.noSuspectTransactions = suspectTransactions.length === 0,
        this.noSuspectAccountsNorAgencies = suspectAccounts.length === 0,
        this.noSuspectAgenciesNorTransactions = suspectAgencies.length === 0, 
        this.noSuspectAccountsNorTransactions = suspectTransactions.length === 0,
        this.nothingSuspect = this.noSuspectAccounts && this.noSuspectAgencies && this.noSuspectTransactions
    };
}

function isSomethingSuspect({ suspectAccounts, suspectAgencies, suspectTransactions }) {
    let message = false;
    const transactions__title = document.querySelector('#transactions__title');
    const results = evaluateData(suspectAccounts, suspectAgencies, suspectTransactions);
    if(results.nothingSuspect) {
        message = 'Nada de suspeito foi identificado no mês analisado.';
        const suspectTables = document.querySelectorAll('.suspectTable');
        suspectTables.forEach(table => table.style.display = 'none');
    }
    else {
        const suspectTransactionsTable = document.querySelector('#suspectTransactions__table');
        const suspectAgenciesTable = document.querySelector('#suspectAgencies__table');
        const suspectAccountsTable = document.querySelector('#suspectAccounts__table');

        if(results.noSuspectAgenciesNorTransactions) {
            message = 'Nenhuma TRANSAÇÃO ou AGÊNCIA suspeita foi identificada no mês analisado.';
            suspectTransactionsTable.style.display = 'none';
            suspectAgenciesTable.style.display = 'none';
        }
        else if(results.noSuspectAccountsNorTransactions) {
            message = 'Nenhuma TRANSAÇÃO ou CONTA suspeita foi identificada no mês analisado.';
            suspectTransactionsTable.style.display = 'none';
            suspectAccountsTable.style.display = 'none';
        }
        else if(results.noSuspectAccountsNorAgencies) {
            message = 'Nenhuma CONTA ou AGÊNCIA suspeita foi identificada no mês analisado.';
            suspectAccountsTable.style.display = 'none';
            suspectAgenciesTable.style.display = 'none';
        }
        else if(results.noSuspectTransactions) {
            message = 'Nenhuma TRANSAÇÃO suspeita foi identificada no mês analisado.';
            suspectTransactionsTable.style.display = 'none';
        }
        else if(results.noSuspectAccounts) {
            message = 'Nenhuma CONTA suspeita foi identificada no mês analisado.';
            suspectAccountsTable.style.display = 'none';
        }
        else if(results.noSuspectAgencies) {
            message = 'Nenhuma AGÊNCIA suspeita foi identificada no mês analisado.';
            suspectAgenciesTable.style.display = 'none';
        }

    }
    transactions__title.textContent = message || transactions__title;
    transactions__title.classList.add('text-center');
    return message;
}