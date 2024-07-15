function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let SumaInicial = num;    //OJO AHI CON PONER 0 (cero) en lugar de num, con cero no funciona.
  let NuevoArray3 = [];     //ARRAY VACIO, necesario para alojar los resultados de iteraciones.   
    for (let i = 0; i < 10; i++) {
      if (i === 5) {                      // OJO CON PONER PRIMERO "el bloque de abajo", funciona solo si lee primero "if..."
        continue;    
      }
      SumaInicial = SumaInicial +2;       //"el bloque de abajo" = SumaInicial", "NuevoArray3...";
      NuevoArray3.push(SumaInicial);
    }
  return NuevoArray3;
}

module.exports = continueStatement;
