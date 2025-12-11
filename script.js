// ------------------------------ INICIO: DATOS DEL DICCIONARIO (BASE) ----------------------------
// Se inicializa el objeto vacío. Los términos y la lógica de búsqueda se añadirán en la siguiente rama.
const dictionaryData = {
    "git": "Sistema de control de versiones distribuido, esencial para el seguimiento de cambios en el código de un proyecto.",
    "push": "Operación de Git que sube los cambios (commits) desde el repositorio local al repositorio remoto (ej. GitHub).",
    "pull": "Comando que trae los cambios desde el repositorio remoto y los fusiona en la rama local.",
    "merge": "Proceso de combinar dos ramas de desarrollo. Suele realizarse después de un Pull Request (PR).",
};
// ------------------------------ FIN: DATOS DEL DICCIONARIO (BASE) ----------------------------

// ------------------------------ INICIO: ANIMACIÓN DEL HEADER ----------------------------
// (El código de la animación se pegará aquí)
document.addEventListener('DOMContentLoaded', () => {
    const subtitleElement = document.getElementById('header-subtitle');
    
    // Función para activar la animación de desvanecimiento (fade-in)
    const animateHeader = () => {
        // Aseguramos que el subtítulo exista antes de manipularlo
        if (subtitleElement) {
             subtitleElement.classList.add('is-visible');
        }
        
        // Opcional: Cambiar el color del subtítulo después de 3 segundos
        setTimeout(() => {
            if (subtitleElement) {
                subtitleElement.style.color = '#388e3c'; 
            }
        }, 3000);
    };

    setTimeout(animateHeader, 500);
});
// ------------------------------ FIN: ANIMACIÓN DEL HEADER ------------------------------------------------

// ------------------------------ INICIO: LÓGICA DE LA APLICACIÓN ----------------------------
// (El código de las funciones y event listeners se pegará aquí)
const form = document.getElementById('search-form');
const input = document.getElementById('word-input');
const resultContainer = document.getElementById('result-container');

// Función para mostrar el resultado (CON ANIMACIÓN)
function displayResult(word, definition) {
    // 1. Ocultar el contenedor primero (reinicia la animación)
    resultContainer.style.opacity = '0';
    resultContainer.style.transform = 'translateY(10px)';
    
    // 2. Insertar el contenido
    resultContainer.innerHTML = `
        <h3 class="word-title">Definición de ${word.toUpperCase()}</h3>
        <p class="definition">${definition}</p>
    `;
    
    // 3. Mostrar con un pequeño retraso para que la animación se vea
    setTimeout(() => {
        resultContainer.style.opacity = '1';
        resultContainer.style.transform = 'translateY(0)';
    }, 50); // Pequeño retraso
}

// Función para manejar el error
function displayError(word) {
    resultContainer.innerHTML = `
        <p class="error-message">❌ Término no encontrado: **${word}**.</p>
        <p class="placeholder-text">Intenta con otro concepto o verifica la ortografía.</p>
    `;
    // Aseguramos que el contenedor se muestre con el mensaje de error
    resultContainer.style.opacity = '1';
    resultContainer.style.transform = 'translateY(0)';
}

// Manejador del evento de búsqueda
function handleSearch(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Preprocesa la entrada: quita espacios y convierte a minúsculas
    const searchTerm = input.value.trim().toLowerCase(); 

    if (searchTerm === "") {
        resultContainer.innerHTML = '<p class="placeholder-text">Por favor, escribe un término válido.</p>';
        return;
    }

    // Busca la definición en la "base de datos"
    const definition = dictionaryData[searchTerm];

    if (definition) {
        displayResult(searchTerm, definition);
    } else {
        displayError(searchTerm);
    }
    
    // Opcional: limpiar la caja de texto después de buscar
    input.value = ''; 
}

// Asigna el evento al formulario
if (form) {
    form.addEventListener('submit', handleSearch);
}

// ------------------------------ FIN: LÓGICA DE LA APLICACIÓN ------------------------------------------------

// ------------------------------ INICIO: LÓGICA DEL FOOTER ----------------------------
// Muestra el año actual en el footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
// ------------------------------ FIN: LÓGICA DEL FOOTER ------------------------------------------------