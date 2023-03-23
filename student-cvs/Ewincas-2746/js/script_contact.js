const form = document.getElementById('form-contact')

let con  = 0
form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Se envio el formulario')
})