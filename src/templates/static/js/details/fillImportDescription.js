function fillImportDescription(imports) {
    const importDate = document.querySelector('#importDate');
    const transactionDate = document.querySelector('#transactionDate');
    const importedBy = document.querySelector('#importedBy');

    importDate.value = new Date(imports.importedAt).toLocaleString();
    transactionDate.value = new Date(imports.datetime).toLocaleDateString();
    importedBy.value = `${imports.user.name} (${imports.user.email})`;
}