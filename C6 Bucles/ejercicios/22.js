function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let array1 = str1.split('');     // Cada STRING transformado en array donde las letras estan x separado
   let array2 = str2.split('');
   let array3 = str3.split('');
   
   if (array1.length == 0 && array2.length == 0 && array3.length == 0) {
      return '';
}
if (array1.length == 1 && array2.length == 1 && array3.length == 1) {
   return array1[0] + array2[0] + array3[0];
}


}
module.exports = combine;


//PRUEBA 1
// let PalabraSeparada = palabra.split('');
// let PrimerElemento = PalabraSeparada.shift();

// while (palabra.length > 0) {
//     return PrimerElemento;
// }

// //PRUEBA 2
// function PruebaCombi (str1, str2, str3) {

//    let Palabra1 = str1.split('');
//    //let PrimerElemento = Palabra1.shift();
   
//        while (Palabra1.length > 0) {
//        Palabra1[1]++;
//    }
//    }

// PRUEBA 3
// let Palabra1 = str1.split('');
// let Palabra2 = str2.split('');
// let Palabra3 = str3.split('');

// if (Palabra1.length == 1 && Palabra2.length == 1 && Palabra3.length == 1) {
//    return Palabra1[0] + Palabra2[0] + Palabra3[0];
// }
// if (Palabra1.length == 0 && Palabra2.length == 0 && Palabra3.length == 0) {
//    return '';
// }
// if (Palabra1.length == 0 || Palabra2.length == 0 || Palabra3.length == 0) {
//    return Palabra1[0] + Palabra2[0] + Palabra3[0] 
//    + Palabra1[1] + Palabra2[1] + Palabra3[1]
//    + Palabra1[2] + Palabra2[2] + Palabra3[2]
//    + Palabra1[3] + Palabra2[3] + Palabra3[3]
//    + Palabra1[4] + Palabra2[4] + Palabra3[4]
//    + Palabra1[5] + Palabra2[5] + Palabra3[5]
//    + Palabra1[6] + Palabra2[6] + Palabra3[6]
//    + Palabra1[7] + Palabra2[7] + Palabra3[7]
//    + Palabra1[8] + Palabra2[8] + Palabra3[8]
//    + Palabra1[9] + Palabra2[9] + Palabra3[9]
//    + Palabra1[10] + Palabra2[10] + Palabra3[10];

// }


// PRUEBA 4
// let array1 = str1.split('');     // Cada STRING transformado en array donde las letras estan x separado
// let array2 = str2.split('');
// let array3 = str3.split('');

// let PrimeraRonda = array1.shift() + array2.shift() + array3.shift();
// let SegundaRonda = array1.shift() + array2.shift() + array3.shift();
// let TerceraRonda = array1.shift() + array2.shift() + array3.shift();
// let CuartaRonda = array1.shift() + array2.shift() + array3.shift();
// // PrimeraRonda + SegundaRonda + TerceraRonda + CuartaRonda
// if (array1.length == 0 && array2.length == 0 && array3.length == 0) {
// return '';
// }
// if (array1.length == 1 && array2.length == 1 && array3.length == 1) {
// return PrimeraRonda;    // ESTE NO FUNCIONA COMO SI LO HACE array1[0] + array2[0] + array3[0]; 
// }

// }


// // PRUEBA 5
// let array1 = str1.split('');     // Cada STRING transformado en array donde las letras estan x separado
// let array2 = str2.split('');
// let array3 = str3.split('');

// if (array1.length == 0 && array2.length == 0 && array3.length == 0) {
//    return '';
// }
// if (array1.length == 1 && array2.length == 1 && array3.length == 1) {
// return array1[0] + array2[0] + array3[0];
// }
// // let PrimeraRonda = array1.shift() + array2.shift() + array3.shift();
// // let SegundaRonda = array1.shift() + array2.shift() + array3.shift();
// // let TerceraRonda = array1.shift() + array2.shift() + array3.shift();
// // let CuartaRonda = array1.shift() + array2.shift() + array3.shift();
// // // PrimeraRonda + SegundaRonda + TerceraRonda + CuartaRonda

// }