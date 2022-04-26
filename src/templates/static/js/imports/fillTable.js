function returnDetailsBtn(imp) {
    const tdDetails = document.createElement('td');
    const detailsBtn = document.createElement('button');

    detailsBtn.textContent = 'Detalhes';
    detailsBtn.classList = 'btn btn-info';
    detailsBtn.addEventListener('click', () => window.location = `/reports/${imp.id}`);

    tdDetails.appendChild(detailsBtn);
    tdDetails.classList = 'text-center align-middle';
    return tdDetails;
}

function fillTable(tableBody, imports) {
    imports.forEach(imp => {
        const tr = document.createElement('tr');
        const tdTransactionDate = document.createElement('td');
        const tdImportDate = document.createElement('td');
        const tdImportedBy = document.createElement('td');

        tdTransactionDate.textContent = new Date(imp.datetime).toLocaleDateString();
        tdImportDate.textContent = new Date(imp.importedAt).toLocaleString();
        tdImportedBy.textContent = imp.user.name;

        const elements = [ tdTransactionDate, tdImportDate, tdImportedBy ];
        elements.forEach(elem => {
            elem.classList = 'text-center align-middle';
            tr.appendChild(elem);
        });
        tr.appendChild(returnDetailsBtn(imp));
        tableBody.appendChild(tr);
    });
}