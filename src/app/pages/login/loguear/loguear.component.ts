import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { TokenService } from '../../../services/security/token.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../../models/login-usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loguear',
  templateUrl: './loguear.component.html',
  styleUrls: ['./loguear.component.css']
})
export class LoguearComponent implements OnInit {
  isLogged = false;
  roles: string[] = [];
  usuario: LoginUsuario;
  errorMsg = '';
  form: FormGroup;
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
    this.form = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
    console.log(this.tokenService.getToken());
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  Submit() {

    this.usuario = new LoginUsuario(
      this.form.get('usuario').value,
      this.form.get('contrasena').value
    );
    console.log(this.usuario);
    this.authService.login(this.usuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate(['']);
    }, (err: any) => {
      this.isLogged = false;
      this.errorMsg = err.error.message;
    });
  }


}
