const form = document.getElementById("formulario");

form.addEventListener("submit", imprimirConsola);

function imprimirConsola(event){
    event.preventDefault();
    console.log(event);
} 