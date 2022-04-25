function fillRolesSelect(roles) {   
    const nivelSelect = document.querySelector('#role');
    roles.forEach(role => {
        const option = document.createElement('option');

        option.value = role.id
        option.textContent = role.role;
        nivelSelect.appendChild(option);
    });
}