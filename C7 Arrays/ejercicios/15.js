function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) {
    return 0;
  }
  if (array !== null) {
    let NumeroMayor = Math.max(...array);
    return array.indexOf(NumeroMayor);
  }
}

module.exports = encontrarIndiceMayor;
