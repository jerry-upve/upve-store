const logged = sessionStorage.getItem('logged');
if (logged !== undefined && logged) {
    if (logged === 'true') {
        document.querySelector('.nav-user-btn').style.display = 'none';
    }else{
        document.querySelector('#dropdown').style.display = 'none';
    }
}else{
    document.querySelector('#dropdown').style.display = 'none';
}

const logout = () => {
    sessionStorage.setItem('logged', false);
    location.reload();
}