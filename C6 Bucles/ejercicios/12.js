function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var DivisiblePor3 = num % 3 == 0; 
  var DivisiblePor5 = num % 5 == 0;
  
  if (DivisiblePor3 && DivisiblePor5) {
    return "fizzbuzz";
  }
  if (DivisiblePor3) {
    return "fizz";
  }
  if (DivisiblePor5) {
    return "buzz";
  }else{
    return false;
  }
}

module.exports = fizzBuzz;
