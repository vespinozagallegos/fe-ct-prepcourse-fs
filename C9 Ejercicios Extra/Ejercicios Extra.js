/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let ArrayDeKeys = Object.keys(objeto);
  
  let Resultado = ArrayDeKeys.map(function (x) {
    let y = objeto[x]; 
    return [x, y];
  })
  return Resultado;
  // INTENTO 1 IMPRECISO.
  // let ArrayDeKeys = Object.keys(objeto);
  // let ArrayDeValues = Object.values(objeto);
  // let ArrayDeArrays = [[ArrayDeKeys[0], ArrayDeValues[0]], [ArrayDeKeys[1], ArrayDeValues[1]]];
  // return ArrayDeArrays;                                                                                                             
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

   let separadaPorLetras = string.toLowerCase().split("").sort();

   let resultado = {};

   separadaPorLetras.forEach((value) => {
    resultado[value] = (resultado[value] || 0) + 1;
  });
  return resultado;

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  function compareFunction(a, b) {
    if (a.toUpperCase() === a && b.toUpperCase() !== b) {    // si 'a' es MAYUS y 'b' minus
      return -1;                                        // -1 -->indica que 'a' va primero      
    }
    else if (a.toUpperCase() !== a && b.toUpperCase() === b) { //si 'a' es minus y 'b' MAYUS
      return 1;                                           // 1 indica que 'b' va primero
    }else{
      return 0;
    }    
  }

  let RESULT = string.split("").sort(compareFunction).join("");
  return RESULT;

}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayDeFrase = frase.split(" ");
  
  let RESULT = arrayDeFrase.map(function (x) {
    let y = x.split("").reverse().join("");
     return y;
 })

 return RESULT.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroAstringAlreves = numero.toString().split("").reverse().join("");
  
  if (numero === parseInt(numeroAstringAlreves)) {
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let stringSinA = string.replace("a", "");
  let stringSinAyB = stringSinA.replace("b", "");
  let stringSinAyByC = stringSinAyB.replace("c", "");

  return stringSinAyByC;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  function compareFunction (a, b) {
    if (a.length < b.length) {
        return -1;
    }else if (a.length > b.length) {
        return 1;
    }else{
        return 0;
  }}

  return arrayOfStrings.sort(compareFunction);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let colador1 = array1.map(function (x) {
    if (array2.includes(x) === true) {
        let newArrayCoincidence = x
        return newArrayCoincidence;
    }
  })
  colador2 = colador1.filter((number) => number !== undefined);

  return colador2;    
  
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};