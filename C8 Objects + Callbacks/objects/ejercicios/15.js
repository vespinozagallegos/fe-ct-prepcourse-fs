function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  let Parametro = propiedad;    // ESTA LÍNEA ES FUNDAMENTAL PARA QUE CONSIDERE LA PALABRA PROPIEDAD, PUESTA SOLO ABAJO
  if (objeto.hasOwnProperty(Parametro)) {    //PUESTA SOLO ENTRE () COMO "propiedad" no se crea el enlace con el 2do parametro dado por la funcion 
    return true;
  }else{
    return false;
  }
}

module.exports = tienePropiedad;
