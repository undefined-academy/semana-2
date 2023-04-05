const miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario al servidor
});