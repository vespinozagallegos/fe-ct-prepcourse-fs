function contarParesConContinue(array) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
    let ArrayConPares = array;
    let NuevoArray4 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {                   //array[i] para referirse al elemento del array
      continue;
    }
    ArrayConPares = ArrayConPares + i;
    NuevoArray4.push(ArrayConPares);
  }
  return NuevoArray4.length;
}

module.exports = contarParesConContinue;

// // ACLARACIÓN DE "const element = array[i];" 
// let Array6 = [];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i]; // Va a guardar la iteracion en la variable "element". Al final quedara guardada la ultima iteracion.
//   Array6.push(element)      // Si quisiera almacenar todas las iteraciones resultantes, debo 'pushear' los resultados a un array vacio previamente declarado (Array6)
  