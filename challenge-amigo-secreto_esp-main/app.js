// Arreglo para almacenar los nombres de los participantes
const amigos = [];

// Función para agregar un nombre a la lista de participantes
function agregarAmigo() {
    const input = document.getElementById("amigo");
    // Trim elimina los espacios en blanco al inicio y al final de la cadena
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

// Función para actualizar la lista de amigos en la interfaz

function actualizarLista() {
    const contenedor = document.getElementById("listaAmigos");
    // Limpiar la lista de amigos
    contenedor.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const box = document.createElement("div");
        box.style.margin = "10px";
        box.className = "friend-box";
        box.textContent = amigo;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);
        // appendClid añade un nodo al final de la lista de hijos de un nodo padre especificado
        box.appendChild(botonEliminar);
        contenedor.appendChild(box);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 participantes para realizar el sorteo.");
        return;
    }

    // Crear una copia de los amigos para el sorteo
    const copiaAmigos = [...amigos];
    const resultado = [];

    amigos.forEach((amigo) => {
        const posibles = copiaAmigos.filter((nombre) => nombre !== amigo);
        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo. Intenta nuevamente.");
            return;
        }
        // redondeando numero 
        const indiceAleatorio = Math.floor(Math.random() * posibles.length);
        // seleccionar un amigo aleatorio
        const seleccionado = posibles[indiceAleatorio];

        resultado.push(` ${amigo} tiene como amigo secreto a ${seleccionado}`);
        // Eliminar el amigo seleccionado de la copia
        copiaAmigos.splice(copiaAmigos.indexOf(seleccionado), 1);
    });

    mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo en la interfaz
// Función para mostrar el resultado del sorteo en la interfaz
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach((linea) => {
        const li = document.createElement("li");
        li.style.margin = "10px";
        li.textContent = linea;
        listaResultado.appendChild(li);
    });

    // Mostrar la caja flotante
    document.getElementById("resultadoCaja").style.display = "flex";
}

// Función para cerrar la caja flotante
function cerrarResultado() {
    document.getElementById("resultadoCaja").style.display = "none";
}

