import Usuario from "../../core/usuario/model/Usuario";
import RepositorioUsuario from "../../core/usuario/service/RepositorioUsuario";
const uuidv4 = require("uuid/v4")

export default class RepositorioUsuarioMemoria implements RepositorioUsuario {
  private readonly usuarios: Usuario[] = [];

  async consultarPorEmail(email: string): Promise<Usuario | null> {
    return this.usuarios.find((usuario) => usuario.email === email) ?? null;
  }
  async criar(usuario: Usuario): Promise<Usuario> {
    const novoUsuario = { ...usuario, id: uuidv4()}; //Date.now()
    this.usuarios.push(novoUsuario);

    return novoUsuario;
  }
}
