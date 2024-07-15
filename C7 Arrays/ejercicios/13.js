function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  
  if (array !== null) {
    return array.filter((Number) => Number % 2 == 0);
  } 
}

module.exports = filtrarNumerosPares;
