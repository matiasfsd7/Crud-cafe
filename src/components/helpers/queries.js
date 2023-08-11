export const login = async (usuario) => {
  try {
    //pedir la lista de usuarios a json-server.

    const respuesta = await fetch("http://localhost:3000/usuarios");
    const listaUsuarios = await respuesta.json();

    //buscar si el usuario que completo el formulario esta dentro de la lista del json-server.
    const usuarioEncontrado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    // si encontre el usuario y si pass es correcto, esta perfecto.
    if (usuarioEncontrado) {
      if (usuarioEncontrado.password === usuario.password) {
        console.log("todo esta perfecto");
        return usuarioEncontrado;
      } else {
        console.log("el password es incorrecto");
        return "usuario u/o contraseña incorrecto";
      }
    } else {
      console.log("el email es incorrecto");
      return null;
    }
    //sino tendria que salir que es incorrecto.
  } catch (error) {
    console.log(error);
  }
};
