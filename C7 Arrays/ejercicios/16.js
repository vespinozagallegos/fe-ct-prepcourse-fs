function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  
  if (array !== null) {
    return array.map((elemento, index) => index * elemento);
  }
}

module.exports = multiplicarElementosPorIndice;
