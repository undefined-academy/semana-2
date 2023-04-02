console.log("Hello world");
function handleSubmit(e) {
    e.preventDefault();
    console.log("Preventing the default behavior when sending the form")
}

const $form = document.querySelector('form');

$form.addEventListener('submit', handleSubmit);