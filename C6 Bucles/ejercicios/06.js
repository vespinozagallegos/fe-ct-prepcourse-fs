function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999) {
    return true;
  }
  else if (num <= 99 || num >= 1000){
    return false;
  }
}

module.exports = tieneTresDigitos;
