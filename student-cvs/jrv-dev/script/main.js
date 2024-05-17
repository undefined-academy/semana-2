
const form = document.getElementById("contact");

function hideShipment(event) {
	event.preventDefault()
	alert("Datos enviados con exito");
	form.reset();
}

form.addEventListener("submit", hideShipment)