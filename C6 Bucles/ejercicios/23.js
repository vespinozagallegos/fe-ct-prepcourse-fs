function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
    let i = 0;  
    let result = 0;
  
    do {
      i += 1;
      result = (num + (5*i));
      } while (i < 8);
      return result;
  }

    module.exports = doWhile;

  // //PRUEBA 1
  // do {
//   let Cero = 0;
//   let Cinco = 5;
//   let formulaPedida = num + Cinco;
// } while ( < );
// cicloFinal = ciclo1 + Aumenta;
// }return cicloFinal;

// //PRUEBA2
//  do {
//    n = 0;
//    let SumaCinco = Math.pow(5, n);
//    let formulaPedida = num + SumaCinco;
//  } while (n < 9);
//  n++;
//  formulaPedida;
// }return formulaPedida;

// //PRUEBA 3
// let n = 0;
// let SumaCinco = Math.pow(5, n);
// let formulaPedida = num + SumaCinco;
// do {
//     n++;
//     formulaPedida;
//   } while (n < 9);
// }

// //PRUEBA 4 esta fallando la entrega del resultado, al final entrega cada resultado uno al lado del otro
// let result = '';
// let i = 0;
//   do {
//     i += 1;
//     result += num + (5*i);
//     } while (i < 9);
//     return result;
// }