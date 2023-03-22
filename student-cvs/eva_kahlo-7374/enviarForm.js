function enviar() {
    var formulario = document.getElementById("myform");
    var dato = formulario[0];
    if (dato.value=="enviar") {
      alert("Enviando el formulario");
      formulario.submit();
      return true;
    } else {
      alert("No se envía el formulario");
      return false;
    }
  }