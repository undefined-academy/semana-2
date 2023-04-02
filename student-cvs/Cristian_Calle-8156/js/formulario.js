const form = document.getElementById("contact-form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Comprobar si el mensaje ya está en el formulario
  if (!document.getElementById("form-message")) {
    const message = document.createElement("p");
    message.textContent = "¡Formulario enviado!";
    message.id = "form-message"; // Agregar un id único al mensaje
    form.appendChild(message);
  }

})