function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  const AñoFechaNacimiento = fechaNacimiento.getFullYear();  //  Entrega el año del parametro 'fechaNacimiento'
  const AñoActual = new Date().getFullYear();                //  Entrega el año actual

  if ((AñoActual) - (AñoFechaNacimiento) >= 18) {
    return true;

  } else if ((AñoActual) - (AñoFechaNacimiento) < 18) {
    return false;
  } else if ((AñoActual) < (AñoFechaNacimiento)) {
    return false;    
  }
}

module.exports = esMayorDeEdad;