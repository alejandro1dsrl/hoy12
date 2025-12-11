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
