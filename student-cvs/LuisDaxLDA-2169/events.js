

let formulario = document.getElementById("form-content");

function enviarFormulario(evento) {
    evento.preventDefault();
}

formulario.addEventListener("submit", enviarFormulario);