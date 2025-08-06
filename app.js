// app.js - Código para el Amigo Secreto

// Variables globales
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, escribe un nombre válido');
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    inputAmigo.value = ''; // Limpiar el campo de entrada
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpiar la lista
    
    // Agregar cada amigo como un elemento de lista
    listaAmigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        
        // Agregar botón para eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'button-delete';
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        itemLista.appendChild(botonEliminar);
        listaHTML.appendChild(itemLista);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';
    
    // Validar que haya al menos 2 amigos en la lista
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo');
        return;
    }
    
    // Hacer una copia de la lista para no modificar la original
    let amigosParaSortear = [...listaAmigos];
    let resultados = [];
    
    // Asignar a cada persona un amigo secreto
    for (let i = 0; i < listaAmigos.length; i++) {
        // Filtrar para que no se asigne a sí mismo
        let posiblesAmigos = amigosParaSortear.filter(amigo => amigo !== listaAmigos[i]);
        
        // Si no hay posibles amigos (última persona), reiniciar el proceso
        if (posiblesAmigos.length === 0) {
            return sortearAmigo(); // Reiniciar el sorteo
        }
        
        // Seleccionar un amigo aleatorio
        const indiceAleatorio = Math.floor(Math.random() * posiblesAmigos.length);
        const amigoSecreto = posiblesAmigos[indiceAleatorio];
        
        // Agregar al resultado
        resultados.push({
            persona: listaAmigos[i],
            amigoSecreto: amigoSecreto
        });
        
        // Eliminar el amigo asignado de la lista temporal
        amigosParaSortear = amigosParaSortear.filter(amigo => amigo !== amigoSecreto);
    }
    
    // Mostrar los resultados
    // Función de sorteo modificada
function sortearAmigo() {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // Limpiar resultados anteriores

    // Validación mínima de 1 participante
    if (listaAmigos.length === 0) {
        alert('¡Agrega al menos un nombre!');
        return;
    }

    // Selección aleatoria simple
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const ganador = listaAmigos[indiceAleatorio];

    // Mostrar resultado (solo el nombre)
    const resultado = document.createElement('div');
    resultado.className = 'ganador';
    resultado.textContent = ganador;
    resultadoHTML.appendChild(resultado);
}
}