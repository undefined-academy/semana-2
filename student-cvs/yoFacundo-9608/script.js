const form = document.getElementById('form');

if (form) {
    form.addEventListener('submit', function(e) {
        // Prevenir el comportamiento por defecto del submit del formulario
        e.preventDefault();
    });
}