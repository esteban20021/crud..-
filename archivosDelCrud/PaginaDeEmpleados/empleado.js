// Función para agregar un empleado
function agregarEmpleado() {
    var nameInput = document.getElementById('nombre');
    var positionInput = document.getElementById('posicion');
    var name = nameInput.value.trim();
    var position = positionInput.value.trim();

    if (name !== '' && position !== '') {
        var employeeList = document.getElementById('listaDeEmpleados');

        var li = document.createElement('li');
        li.innerHTML = '<span>' + name + '</span><span>' + position + '</span><button onclick="editEmployee(this)">Editar</button><button onclick="deleteEmployee(this)">Eliminar</button>';
        employeeList.appendChild(li);

        nameInput.value = '';
        positionInput.value = '';
    }
}

// Función para editar un empleado
function editEmployee(button) {
    var li = button.parentElement;
    var name = li.querySelector('span:first-child').textContent;
    var position = li.querySelector('span:nth-child(2)').textContent;

    var newName = prompt('Editar nombre', name);
    var newPosition = prompt('Editar cargo', position);

    if (newName !== null && newPosition !== null) {
        li.querySelector('span:first-child').textContent = newName;
        li.querySelector('span:nth-child(2)').textContent = newPosition;
    }
}

// Función para eliminar un empleado
function deleteEmployee(button) {
    var li = button.parentElement;
    li.remove();
}
function volver(){
    window.location.href = '../index.html';
}
