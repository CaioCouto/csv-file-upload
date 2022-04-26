function fillAccountsTable(accounts) {
    const tableBody = document.querySelector('#suspectAccounts__table-body');
    accounts.forEach(acc => {
        const tr = document.createElement('tr');
        const tdBank = document.createElement('td');
        const tdAgency = document.createElement('td');
        const tdNumber = document.createElement('td');
        const tdValue = document.createElement('td');
        const tdType = document.createElement('td');

        tdBank.textContent = acc.bank;
        tdAgency.textContent = acc.agency;
        tdNumber.textContent = acc.number;
        tdValue.textContent = formatBRLMoney(acc.amount);
        tdType.textContent = acc.type;

        const elements = [ 
            tdBank,
            tdAgency,
            tdNumber,
            tdValue,
            tdType
        ];

        elements.forEach(td => {
            td.classList = 'align-middle text-center';
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}