// Función para agregar un cliente
function addClient() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name !== '' && email !== '') {
        var clientList = document.getElementById('clientList');

        var li = document.createElement('li');
        li.innerHTML = '<span>' + name + '</span><span>' + email + '</span><button onclick="editClient(this)">Editar</button><button onclick="deleteClient(this)">Eliminar</button>';
        clientList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

// Función para editar un cliente
function editClient(button) {
    var li = button.parentElement;
    var name = li.querySelector('span:first-child').textContent;
    var email = li.querySelector('span:nth-child(2)').textContent;

    var newName = prompt('Editar nombre', name);
    var newEmail = prompt('Editar correo electrónico', email);

    if (newName !== null && newEmail !== null) {
        li.querySelector('span:first-child').textContent = newName;
        li.querySelector('span:nth-child(2)').textContent = newEmail;
    }
}

// Función para eliminar un cliente
function deleteClient(button) {
    var li = button.parentElement;
    li.remove();
}

function volver(){
    window.location.href = '../index.html';
}