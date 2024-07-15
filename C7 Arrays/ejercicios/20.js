function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (Math.min (...array) === Math.max(...array)) {
    return true;
}else{
    return false;
}
}

module.exports = todosIguales;
