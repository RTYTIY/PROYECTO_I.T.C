// Simulación de notificaciones de incendios
let incendios = [
    { region: 'occidente', intensidad: 'grave', descripcion: 'Incendio grave en los bosques de La Paz.' },
    { region: 'oriente', intensidad: 'moderado', descripcion: 'Incendio moderado cerca de Santa Cruz.' },
];

function mostrarIncendios(incendiosFiltrados) {
    const contenedor = document.getElementById('contenedor-notificaciones');
    contenedor.innerHTML = ''; // Limpiar notificaciones anteriores

    incendiosFiltrados.forEach(incendio => {
        const div = document.createElement('div');
        div.classList.add('notificacion');
        div.textContent = `${incendio.descripcion} (${incendio.region.toUpperCase()} - Intensidad: ${incendio.intensidad.toUpperCase()})`;
        contenedor.appendChild(div);
    });
}

function filtrarIncendios() {
    const region = document.getElementById('region').value;
    const intensidad = document.getElementById('intensidad').value;

    const incendiosFiltrados = incendios.filter(inc => {
        const coincideRegion = region === 'todas' || inc.region === region;
        const coincideIntensidad = intensidad === 'todos' || inc.intensidad === intensidad;
        return coincideRegion && coincideIntensidad;
    });

    mostrarIncendios(incendiosFiltrados);
}

// Manejar el reporte de incendios
document.getElementById('form-reporte').addEventListener('submit', function(event) {
    event.preventDefault();

    const descripcion = document.getElementById('descripcion').value;
    const region = document.getElementById('region-reporte').value;
    const intensidad = document.getElementById('intensidad-reporte').value;

    if (descripcion && region && intensidad) {
        const nuevoIncendio = { descripcion, region, intensidad };
        incendios.push(nuevoIncendio); // Agregar el nuevo incendio
        mostrarIncendios(incendios); // Actualizar la lista
        alert('¡Incendio reportado exitosamente!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Chatbot básico
function enviarMensaje() {
    const inputChat = document.getElementById('input-chat').value.toLowerCase();
    const contenedorChat = document.getElementById('contenedor-chat');

    let respuesta;
    if (inputChat.includes('incendios')) {
        respuesta = 'Actualmente hay varios incendios en Bolivia. Revisa la lista para más detalles.';
    } else if (inputChat.includes('contacto')) {
        respuesta = 'Puedes contactarnos en info@incendiosbolivia.com.';
    } else {
        respuesta = 'Lo siento, no entiendo tu pregunta. Intenta preguntar sobre incendios o contacto.';
    }

    const div = document.createElement('div');
    div.textContent = 'Usuario: ' + inputChat;
    contenedorChat.appendChild(div);

    const divRespuesta = document.createElement('div');
    divRespuesta.textContent = 'Chatbot: ' + respuesta;
    contenedorChat.appendChild(divRespuesta);
    
    // Limpiar el input
    document.getElementById('input-chat').value = '';
}

// Mostrar todos los incendios al cargar la página
window.onload = () => {
    mostrarIncendios(incendios);
};
