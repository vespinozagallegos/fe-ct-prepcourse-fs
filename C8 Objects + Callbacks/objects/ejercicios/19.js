function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  
  // HAY 2 OPCIONES
  
  // 1
  let NuevoArreglo = 
    objetoMuchosUsuarios.map(function (x) {    // Map que hace? Afecta a todos los elementos representados con "x"
      return Object.defineProperties(x, {     // Se Pone "x" para que calce con la "x" arriba y ocurra la redefinicion de propiedades a todos los objetos que estan dentro del objeto "objetoMuchosUsuarios"
        esPremium: {                           
            value: true
          }
        }); 
    })
  
  return NuevoArreglo;
  };

  module.exports = pasarUsuarioAPremium;
  

  //   // 2
  //   return objetoMuchosUsuarios.map(function (x) {
  //     return Object.defineProperties(x, {
  //       esPremium: {
  //         value: true
  //       }
  //     }); 
  //   });
  // }
    
