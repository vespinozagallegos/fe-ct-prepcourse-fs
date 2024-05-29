function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  //const IsVocal = (letra) => letra === Vocal;
  const Vocal = ["a" , "e" , "i" , "o" , "u"];

  if (Vocal.includes(letra)) {
    return "Es vocal";
  }
  if (letra.length >= 2) {  
    return "Dato incorrecto";
  }
  else {
    return "Dato incorrecto";
}
}
  // if (letra === "e") {
  //   return "Es vocal";
  // }
  // if (letra === "i") {
  //   return "Es vocal";
  // }
  // if (letra === "o") {
  //   return "Es vocal";
  // }
  // if (letra === "u") {
  //   return "Es vocal";
  // }
  
  // if (letra.length >= 2) {  
  //   return "Dato incorrecto";
  // }

  // else if (letra !== "a") {
  //   return "Dato incorrecto";
  // }
  // else if (letra !== "e") {
  //   return "Dato incorrecto";
  // }
  // else if (letra !== "i") {
  //   return "Dato incorrecto";
  // }
  // else if (letra !== "o") {
  //   return "Dato incorrecto";
  // }
  // else if (letra !== "u") {
  //  return "Dato incorrecto";
  // }
  // }
module.exports = esVocal;
