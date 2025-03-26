// Funci�n para agregar un elemento a la lista
function agregar() {
    let listaElementos = document.getElementById('lista');
    let elementoNuevo = document.createElement('li');
    let numeroElementos = listaElementos.getElementsByTagName('li').length + 1;
    elementoNuevo.textContent = `Elemento${numeroElementos}`;
    listaElementos.appendChild(elementoNuevo);

}

// Funci�n para cambiar el color del fondo de toda la p�gina
function cambiarFondo() {
    let listaElementos = document.body;
    if (listaElementos.style.backgroundColor === 'green') {
        listaElementos.style.backgroundColor = 'white';
    } else {
        listaElementos.style.backgroundColor = 'green';
;
    }
}

// Funci�n para borrar el �ltimo elemento de la lista
function borrar() {
    let listaElementos = document.getElementById('lista');
    if (listaElementos.lastElementChild) {
        listaElementos.removeChild(listaElementos.lastElementChild);
    }
}