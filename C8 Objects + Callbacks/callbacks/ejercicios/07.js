function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   
   let arrayConPalabrasDeInicialA = arrayOfStrings.filter((word) => word[0] === 'a');

   return arrayConPalabrasDeInicialA;
}

module.exports = filter;
