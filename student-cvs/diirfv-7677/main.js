const form = document.getElementById('contact-form');

const country = document.getElementById('country');

country.setCustomValidity('El pais es obligatorio');

country.checkValidity();

form.addEventListener('submit', function(e) {
    
    if (country.value == '') {
        e.preventDefault();
        return false;
      }
});

country.addEventListener('change', function() {
    country.setCustomValidity('');
    country.checkValidity();
})