
const form = document.getElementById("contact-form");

function hideShipment(event) {
	event.preventDefault()
	alert("Datos enviados con exito");
	form.reset();
}

form.addEventListener("submit", hideShipment)