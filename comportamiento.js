function validarNota() {
    input = document.getElementsByTagName("input").value

    if(input >= 0 && input <= 10){
        alert("god")
    }else{
        alert("error");
    }
    
}