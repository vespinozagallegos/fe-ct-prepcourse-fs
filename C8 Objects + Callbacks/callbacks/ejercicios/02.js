function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   
   var resultado = string.toUpperCase(); 
   callback(string);
   return resultado;
}
module.exports = cambiarCadena;

// Devuelve el item 3 correcto ---> si se entrega una cadena vacia, devolver cadena vacia
// callback(string);
// return string;   