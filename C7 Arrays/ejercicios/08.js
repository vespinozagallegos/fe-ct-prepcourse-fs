function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.      //INCLUDES
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.   //indexOf()
   // Si no se encuentra, retorna -1.
   // Tu código:
   if (array.includes(num)) {
         return array.indexOf(num);
   }else{
      return -1;
   }
}

module.exports = encontrarElemento;
