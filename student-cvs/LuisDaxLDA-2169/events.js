
let formulario = document.getElementById("form-content");

function enviarFormulario(evento) {
    evento.preventDefault();
}

if(formulario){
    formulario.addEventListener("submit", enviarFormulario);
}
