export class LoginUsuario {
  nombreUsuario: string;
  password: string;
  constructor(usuario: string, contrasena: string) {
      this.nombreUsuario = usuario;
      this.password = contrasena;
  }
}
