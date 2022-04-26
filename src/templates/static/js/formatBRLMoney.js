function formatBRLMoney(money) {
    return money.toLocaleString('fullwide', { maximumFractionDigits:2, style:'currency', currency:'BRL', useGrouping:true });
}