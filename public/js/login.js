const passwordView = (e) => {
    let pattern = /Mostar/;
    if( pattern.test(e.textContent)){
        e.innerText = "Ocultar Contraseña";
        document.getElementById('key_input').type = "text";
    }else{
        e.innerText = "Mostar Contraseña";
        document.getElementById('key_input').type = "password";
    }
}

document.getElementById('btn-login').addEventListener('click', () => {
    let usr = document.getElementById('usr_input').value;
    let psw = document.getElementById('key_input').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            user: usr,
            pass: psw,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((resp) => {
        if (resp.success){
            sessionStorage.setItem('logged', true);
            document.querySelector('.divider').innerText = '';
            window.location.replace('../main.html');
        }else{
            sessionStorage.setItem('logged', false);
            document.querySelector('.divider').innerText = resp.errors;
        }
    });
});

const logged = sessionStorage.getItem('logged');

if (logged !== undefined && logged) {
    if (logged === 'true') {
        window.location.replace('../main.html');
    }
}