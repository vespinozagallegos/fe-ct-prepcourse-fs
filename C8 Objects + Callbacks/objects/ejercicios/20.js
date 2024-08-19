function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  
  const initialValue = 0;
  
  const sumWithInitial = objetoUsuario.posts.reduce(
      (accumulator, post) => accumulator + post.likes,
      initialValue,
    );
    return sumWithInitial;
  
}

module.exports = sumarLikesDeUsuario;

  // let PropiedadAAcceder = objetoUsuario.posts;    //ARRAY DE OBJETOS post
  
  // let Accediendo1 = PropiedadAAcceder[0];         //PRIMER OBJETO post
  // let Accediendo2 = PropiedadAAcceder[1];
  // let Accediendo3 = PropiedadAAcceder[2];
  // let Accediendo4 = PropiedadAAcceder[3];
  // let Accediendo5 = PropiedadAAcceder[4];
  
  // let ArrayDeLikes = Accediendo1.likes + Accediendo2.likes + Accediendo3.likes  + Accediendo4.likes + Accediendo5.likes;
  
  // return ArrayDeLikes;  