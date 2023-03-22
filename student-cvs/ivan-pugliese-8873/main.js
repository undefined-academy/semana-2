const form = document.getElementById("form");

function deleteEvent(event) {
    event.preventDefault();
}

form.addEventListener("submit", deleteEvent);