function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let NuevoArray2 = [];                 // Array vacio que almacenará los nuevos valores del arreglo
  let InicioSuma = num;                 // Variable para almacenar "num" y el +2
  for (let i = 0; i < 10; i++) {
    InicioSuma = InicioSuma + 2;
    NuevoArray2.push(InicioSuma);
    if (NuevoArray2.includes(i)) {
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return NuevoArray2;
  
}

module.exports = breakStatement;
