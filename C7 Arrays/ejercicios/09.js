function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if (array.length == 0) {
      return undefined;
   }
   if (array.length == 1) {
      return array.shift();
   }else{      
      return Math.ceil(Math.random()*array.length);
}
}

module.exports = obtenerElementoAleatorio;
