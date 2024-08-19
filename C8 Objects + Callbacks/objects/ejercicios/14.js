function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.email != null) {
    return true;
  }else{
    return false;
  }
}


module.exports = tieneEmail;

//INTENTO 1
// let DevuelveTrueOrFalse = objetoUsuario.email.hasOwnProperty(0);
// return DevuelveTrueOrFalse;


//INTENTO 2
// if (objetoUsuario.email.hasOwnProperty(0) === true) {
//   return true;
// }
// else{
  //   return false;
  // }
  