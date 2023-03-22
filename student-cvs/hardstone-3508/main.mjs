//console.log("hola mundo")

function handleSubmit(event) {
    event.preventDefault();
    console.log("Hola mundo mi primera funcion");
}
const $form = document.
querySelector("form")

$form.addEventListener("submit", handleSubmit);
