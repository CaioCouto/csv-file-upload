function showAlert(element, type, message) {
    element.style.display='';
    element.classList.add(`alert-${type}`);
    element.textContent=message;
    window.setTimeout(() => {
        element.style.display = 'none';
        element.classList.remove(`alert-${type}`);
    }, 5000);
}