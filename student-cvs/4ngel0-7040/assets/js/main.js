document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
});

const eventListeners = () => {

    //Mustra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="rd"]');

    metodoContacto.forEach(input => {
        
        input.addEventListener('click', mostrarMetodoContacto);
    });


}

const mostrarMetodoContacto = (e) => {
    const contactoDiv = document.querySelector('#contacto');

    if (e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
        <div class="form-group"> 
            <label for="telefono">Número de Teléfono</label>
            <input type="tel" name="telefono" id="telefono" placeholder="Tu Teléfono" required>
        </div>
        `;
        return;
    } else {
        contactoDiv.innerHTML = `
        <div class="form-group"> 
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Tu E-mail" required>
        </div>
        `;
    }

}