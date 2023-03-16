const form = document.getElementById('form');

form.addEventListener('submit', pDefault);

function pDefault(e) {
  console.log('Enviar Clicked');
  e.preventDefault();
}
