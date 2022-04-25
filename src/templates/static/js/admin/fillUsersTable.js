function getOptionsTD(user) {
    const options = document.createElement('td');
    const editBtn = document.createElement('button');
    const deleteBtn =  document.createElement('button');

    deleteBtn.textContent = 'Apagar';
    deleteBtn.classList = 'btn btn-danger';
    deleteBtn.addEventListener('click', () => deleteUser(user.id));
    
    editBtn.textContent = 'Editar';
    editBtn.classList = 'btn btn-success';
    editBtn.setAttribute('data-bs-toggle','modal');
    editBtn.setAttribute('data-bs-target','#exampleModal');
    editBtn.addEventListener('click', () => fillUserUpdateForm(user));

    options.appendChild(editBtn);
    options.appendChild(deleteBtn);
    options.classList = 'd-flex flex-wrap justify-content-center gap-2';
    return options;
}

function fillUsersTable(users) {    
    const usersTableBody = document.querySelector('#users__table-body');
    users.forEach(user => {
        if(user.roleId !== 1) return;
        const tr = document.createElement('tr');
        const tdID = document.createElement('td');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        const tdStatus = document.createElement('td');
        
        tdID.textContent = user.id;
        tdEmail.textContent = user.email;
        tdName.textContent = user.name;
        tdStatus.textContent += user.deleted ? 'Desativo' : 'Ativo';

        tdID.classList = 'text-center align-middle';
        tdEmail.classList = 'text-center align-middle';
        tdName.classList = 'text-center align-middle text-capitalize';
        tdStatus.classList = 'text-center align-middle';
        
        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdStatus);
        tr.appendChild(getOptionsTD(user));
        usersTableBody.appendChild(tr);
    });
}