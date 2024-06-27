function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
let StringEnArray = texto.split('');
let invertir = StringEnArray.reverse();
return invertir.join('');           // OJO con las comillas, si no van la palabra se devuelve con "," entre c/letra.
}

module.exports = invertirTexto;
