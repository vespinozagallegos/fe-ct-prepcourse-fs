const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado. //Hay un retorno de "false" al poner una var ____ = callback(array);
  // Tu código:
  let NoSeEncuentra = callback(array);
  
  if (NoSeEncuentra === false) {
    return "No se encontró el elemento";
  }
}  
  module.exports = buscarElemento;
  
//   let SeEncontro = callback(array);

//   if (SeEncontro == []) {
//     return "No se encontró el elemento";
//   }
//   return SeEncontro;
// };