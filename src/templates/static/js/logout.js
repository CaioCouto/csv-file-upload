const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', () => {
    fetch(`http://localhost:3333/users/logout`)
    .then(resp => {
        if(resp.status === 200) window.location.replace('/');
    })
    .catch(error => console.log(error));
})