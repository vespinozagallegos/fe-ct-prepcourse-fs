function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   
                              // RESOLUCION 1 (NO ES DEL TODO CORRECTA) DONDE DA 105 por default, si es que no se EXPRESA un nro para n 
      var InicioSuma = 0;
     
      for (let i=0; i<n; i++) {
        InicioSuma = InicioSuma +i;    
         if (n > 15) {
         break;
         }
      }
      if (n <= 14) {
         return InicioSuma + n;
      }else{
         return 105;
      }
   }

   
   // RESOLUCION 2 ESTA EXPRESION SERIA LA MAS CORRECTA Y SE LLEGO CON AYUDA DE OTRA PROGRAMADORA

//    var InicioSuma = n;
  
//    switch (n < 15) {
//       case true:
//          for (let i=0; i<n; i++) {
//             InicioSuma = InicioSuma +i;    
//          }
//          break;

//       default:
//          InicioSuma = 105
//          break;
//    }
//    return InicioSuma;
// }




   
module.exports = sumarHastaNConBreak;
