function validarNota(nota, materia) {
    if(nota > 0 && nota <= 10){
        document.getElementById(materia).style.color="green"
        return true;
    }else{
        document.getElementById(materia).style.color="red"
        return false;
    }
    
}

function hacerPromedio(notamate, notalengua, notaefsi) {
  let n1, n2,n3;
  let promedio = 0;

  n1= document.getElementById(notamate).value;
  n2= document.getElementById(notalengua).value;
  n3= document.getElementById(notaefsi).value;

  parseInt(n1, n2, n3)
  promedio= n1+n2+n3;
  console.log(promedio)

  document.getElementById("resultado").innerHTML = promedio;

  if(promedio>6){
    document.getElementById(promedio).style.color="green"
    return true;
  }else{
    document.getElementById(promedio).style.color="red"
    return false;
  
  }
}