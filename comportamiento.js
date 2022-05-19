function validarNota(nota, materia) {
    if(nota > 0 && nota <= 10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
    
}


function showError() {
    if(input.validity.valueMissing) {
      // Si el campo está vacío
      // muestra el mensaje de error siguiente.
      emailError.textContent = 'Debe introducir un valor de la nota';
    } else if(email.validity.typeMismatch) {
      // Si el campo no contiene una dirección de correo electrónico
      // muestra el mensaje de error siguiente.
      emailError.textContent = 'El valor introducido debe ser un numero del 1 al 10';
    }
  
}
