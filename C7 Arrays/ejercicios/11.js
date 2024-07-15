function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  return array.map((x) => x + x);
}

module.exports = duplicarElementos;

// // PRUEBA 1
// let NuevoArray = array;
// return NuevoArray.from([array], (x) => x + x);