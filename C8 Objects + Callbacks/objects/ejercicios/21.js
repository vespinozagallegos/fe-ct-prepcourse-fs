function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:

     
};

module.exports = agregarMetodoCalculoDescuento;

//objetoProducto.calcularPrecioDescuento = OperacionMat (PrecioProducto, PorcentajeDescuento);

// function OperacionMat(a, b) {
//   return a*b;
// }

// let PrecioProducto = objetoProducto.precio;
// let PorcentajeDescuento = objetoProducto.porcentajeDeDescuento;

//let PrecioConDescuento = PrecioProducto - objetoProducto.calcularPrecioDescuento;  // o = objetoProducto.precio - objetoProducto.calcularPrecioDescuento;

//return PrecioConDescuento;


// // CON CALLBACKS OP 2
// let Precio = function () {
//   return objetoProducto["precio"];    
// }

// let Descuento = function () {
//   return objetoProducto["porcentajeDeDescuento"];
// }

// let Operacion = function (cb1, cb2) {
//   return cb1 - (cb1 * cb2);
// }

// objetoProducto["calcularPrecioDescuento"] = Operacion (Precio, Descuento);

// return objetoProducto["calcularPrecioDescuento"];

// // let Resultado = Operacion (Precio, Descuento);


// // return Resultado;