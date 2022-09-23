/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no.
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:

  /* se extraen los dígitos,  esto se logra dividiendo por 10 y tomando el resto 
  103 % 10 = 10 r 3 
  10 % 10 =  1 r 0
  1 % 10 =  0 r 1*/

  //return ""+num === (""+num).split("").reverse().join("")
  var invertido = 0;
  var resto = num;
  do {
    invertido = invertido * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while (resto > 0);
  if (invertido === num) {
    return true;
  } else {
    return false;
  }
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico;
