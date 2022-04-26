function fillTransactionsTable(transactions, tableBody) {
    transactions.forEach(transaction => {
        const tr = document.createElement('tr');
        const tdOriginBank = document.createElement('td');
        const tdOriginAgency = document.createElement('td');
        const tdOriginAccount = document.createElement('td');
        const tdDestinationBank = document.createElement('td');
        const tdDestinationAgency = document.createElement('td');
        const tdDestinationAccount = document.createElement('td');
        const tdValue = document.createElement('td');

        tdOriginBank.textContent = transaction.originBank;
        tdOriginAgency.textContent = transaction.originAgency;
        tdOriginAccount.textContent = transaction.originAccount;
        tdDestinationBank.textContent = transaction.destinationBank;
        tdDestinationAgency.textContent = transaction.destinationAgency;
        tdDestinationAccount.textContent = transaction.destinationAccount;
        tdValue.textContent = formatBRLMoney(transaction.amount);

        const elements = [ 
            tdOriginBank,
            tdOriginAgency,
            tdOriginAccount,
            tdDestinationBank,
            tdDestinationAgency,
            tdDestinationAccount,
            tdValue
        ];

        elements.forEach(td => {
            td.classList = 'align-middle text-center';
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}