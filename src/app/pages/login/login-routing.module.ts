import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoguearComponent } from './loguear/loguear.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  {path: '', component: LoginComponent,
  children: [
    {path: 'loguear', component: LoguearComponent},
    {path: 'registrar', component: RegistrarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
