function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  if (array !== null) {
    return array.map((String) => String.toUpperCase());    
  }
}

module.exports = convertirStringAMayusculas;
