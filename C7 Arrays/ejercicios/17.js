function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
let initialValue = 0;
let sumWithInitial = arrayOfNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

return sumWithInitial;
}

module.exports = agregarNumeros;
