function getMonths() {
    const now = new Date(Date.now());
    return [
        `Janeiro ${now.getFullYear()}`, `Fevereiro ${now.getFullYear()}`, 
        `Março ${now.getFullYear()}`, `Abril ${now.getFullYear()}`, 
        `Maio ${now.getFullYear()}`, `Junho ${now.getFullYear()}`, 
        `Julho ${now.getFullYear()}`, `Agosto ${now.getFullYear()}`, 
        `Setembro ${now.getFullYear()}`, `Outubro ${now.getFullYear()}`,
        `Novembro ${now.getFullYear()}`, `Dezembro ${now.getFullYear()}`,
    ];

}
function fillMonthSelect() {
    const monthSelect = document.querySelector('#monthSelect');
    const months = getMonths();
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.textContent = month;
        option.value = index;
        monthSelect.appendChild(option);
    })
}