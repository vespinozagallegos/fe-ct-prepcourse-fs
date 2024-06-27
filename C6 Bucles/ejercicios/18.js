function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
var MenoresQueElNroMayor = 1;

for (var i = (Math.min(a,b)) ; i<(Math.max(a,b)) ; i++){
  MenoresQueElNroMayor = MenoresQueElNroMayor *i;
}
if (a == b) {
  return a;  
}
if (a < 0 || b < 0) {
  return 0;
}
  return MenoresQueElNroMayor * (Math.max(a,b));
}

module.exports = productoEntreNúmeros;


                        // por aqui va la cosa
// var suma = 0;                  

// for (var i=0 ; i<10 ; i++){
//   suma = suma +1;
//   console.log(suma*i);
// }

// LA SIGUIENTE DA 3/5 buenas
// var suma = Math.min(a,b);

// for (var i = (Math.min(a,b)) ; i<(Math.max(a,b)) ; i++){
//   suma = suma *i;
// }
//   return suma * (Math.max(a,b));
// }



// ESTA HACE BIEN LA OPERACION PERO LA VARIABLE INICIAL MOLESTA EL RESULTADO, PROBAR EN LA CONSOLO CHROME
// var suma = Math.min(a,b);

// for (var i = suma ; i<(Math.max(a,b)) ; i++){
//   suma = suma * i * (Math.max(a,b));
// return suma ;
// }
// }

// CON ESTE HAY 4/5 BUENAS
// var suma = Math.min(a,b);

// for (var i = (Math.min(a,b)) ; i<(Math.max(a,b)) ; i++){
//   suma = suma *i;
// }
// if (a == b) {
//   return a;  
// }
//   return suma * (Math.max(a,b));
// }

