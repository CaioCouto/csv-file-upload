function fillAgenciesTable(agencies) {
    const tableBody = document.querySelector('#suspectAgencies__table-body');
    agencies.forEach(agency => {
        const tr = document.createElement('tr');
        const tdBank = document.createElement('td');
        const tdNumber = document.createElement('td');
        const tdValue = document.createElement('td');
        const tdType = document.createElement('td');

        tdBank.textContent = agency.bank;
        tdNumber.textContent = agency.agency;
        tdValue.textContent = formatBRLMoney(agency.amount);
        tdType.textContent = agency.type;

        const elements = [ 
            tdBank,
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