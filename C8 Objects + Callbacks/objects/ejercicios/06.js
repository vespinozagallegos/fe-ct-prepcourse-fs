const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  
  let TodasLasProp = Object.keys(objeto);
  let CuantasProp = TodasLasProp.length; 
  
  return CuantasProp;
 
};

module.exports = contarPropiedades;
