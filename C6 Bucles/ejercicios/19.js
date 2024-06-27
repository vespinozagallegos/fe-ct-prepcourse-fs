function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  
  var InicioSuma = 0;
  
  for (let i=0; i<n; i++) {
    InicioSuma = InicioSuma +i;    
    }
    return InicioSuma + n;
    
    }
    
  
  module.exports = sumarHastaN;
  
  //  Se reemplaza inicioSuma=0 por inicioSuma=n y se borra al final
  
  // var InicioSuma = n;
  
  // for (let i=0; i<n; i++) {
  //   InicioSuma = InicioSuma +i;    
  //   }
  //   return InicioSuma;
    
  // }