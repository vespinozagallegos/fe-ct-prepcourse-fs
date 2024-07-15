function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  if (array !== null) {
    return array.find((Element) => Element.length > 5);
  }
  
}

module.exports = obtenerPrimerStringLargo;
