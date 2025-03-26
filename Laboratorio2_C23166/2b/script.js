// Función para agregar un elemento a la lista
function agregar() {
    let listaElementos = document.getElementById('lista');
    let elementoNuevo = document.createElement('li');
    let numeroElementos = listaElementos.getElementsByTagName('li').length + 1;
    elementoNuevo.textContent = `Elemento${numeroElementos}`;
    listaElementos.appendChild(elementoNuevo);

}

// Función para cambiar el color del fondo de toda la página
function cambiarFondo() {
    let listaElementos = document.body;
    if (listaElementos.style.backgroundColor === 'green') {
        listaElementos.style.backgroundColor = 'white';
    } else {
        listaElementos.style.backgroundColor = 'green';
;
    }
}

// Función para borrar el último elemento de la lista
function borrar() {
    let listaElementos = document.getElementById('lista');
    if (listaElementos.lastElementChild) {
        listaElementos.removeChild(listaElementos.lastElementChild);
    }
}