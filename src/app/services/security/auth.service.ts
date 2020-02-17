import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../../models/login-usuario';
import { JwtModel } from '../../models/jwt-model';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../../models/nuevo-usuario';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    console.log(usuario);
    return this.httpClient.post<JwtModel>(this.authURL + 'login' , usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuario, cabecera);
  }
}
