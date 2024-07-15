function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let initialValue = 0;
let sumWithInitial = resultadosTest.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

return sumWithInitial/resultadosTest.length;
}

module.exports = promedioResultadosTest;
