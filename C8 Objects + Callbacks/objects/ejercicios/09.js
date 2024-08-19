function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  NuevoObjeto = {nombre: nombre, email: email, password: password};
  return NuevoObjeto;
}

module.exports = nuevoUsuario;

// NuevoObjeto = {};
// NuevoObjeto.nombre = nombre;
// NuevoObjeto["email"] = email;
// NuevoObjeto.password = password;

// return NuevoObjeto;