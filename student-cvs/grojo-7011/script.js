const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    console.log("Eligio enviar el formualrio ");
    event.preventDefault();
    
    let mensaje ="El metodo de envio de su formulario es " + form.method + " desea cambiarlo a POST y enviarlo ?";

    const confirm_submit_only_by_post=confirm (mensaje);

    if(confirm_submit_only_by_post) {
        form.method="post";
        form.submit();
    } else {
        alert("Ha decidido no enviar el formulario");
    }
});
