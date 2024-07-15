function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  if (array !== null) {
    let Filtro = array.filter((Number) => Number > 10);
    return Filtro.length;
  }
}

module.exports = contarElementosMayoresA10;
