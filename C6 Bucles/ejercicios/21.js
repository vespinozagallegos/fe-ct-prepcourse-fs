function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

while ((Math.pow(2, numero)) % numero == 0) {
  return true;
}
while ((Math.pow(2, numero)) % numero !== 0) {
  return false;
}        
}
module.exports = esPotenciaDeDos;


// // AQUI ME DA LA MITAD BUENA 
// while (numero >= 0 && Math.pow(2, numero)>0) {
  //   return true;
  // }return false;
  
  
  // // INTENTO 2
  //   n = 0
  // PotenciaDeDos = Math.pow(2, n); 
  // while (numero >= 0 && numero == PotenciaDeDos) {
//   return true;
//   n++;
// }return false;


// // INTENTO 3
// n = 0;
// x = Math.pow(2 ,n)
// while (numero * 2 == x) {
//   n++;
// }
// return n;


