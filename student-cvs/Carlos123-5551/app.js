const btn = document.querySelector("#btn");

btn.addEventListener("click", btnEvent);

function btnEvent(e) {
    console.log("Evento clickeado");
    e.preventDefault();
}