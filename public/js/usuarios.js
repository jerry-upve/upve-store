const modalCerrar = (id) => {
    document.getElementById(id).style.display='none';
}

const modalAbrir = (id) => {
    document.getElementById(id).style.display='block';
}

const editarModal = (data) => {
    console.log(data)
}

const eliminarModal = (data) => {
    alert(data)
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/usuarios', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.success){
            data.users.forEach(user => {
                document.getElementById('table-user-id').innerHTML += `
                <tr>
                    <td>${user.nombre}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.status === 1 ? "Administrador":"Cliente"}</td>
                    <td>
                        <div class="dropdown-action">
                            <button class="dropbtn">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div class="dropdown-action-content">
                                <span onclick='editarModal(${JSON.stringify(user)})'>Editar</span>
                                <span onclick="eliminarModal(${user.id})">Eliminar</span>
                            </div>
                        </div>
                    </td>
                </tr>`;
            });
        }else{
            alert(data.error)
        }
    });
});