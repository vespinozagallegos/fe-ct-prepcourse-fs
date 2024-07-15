function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let num = 1;
  let MultiplosDeN = n * num;
  for (let i = 0; i < secuencia.length; i++) {
    num = num + 1;
    if (secuencia.find((Element) => Element == MultiplosDeN)) {
      break;
    }
    else {
      return undefined;
    }
  }return MultiplosDeN;
}

module.exports = encontrarPrimerMultiploDeN;

// if (secuencia.includes(MultiplosDeN)) {
//   break;
// }