import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardGuard } from './guards/guard.guard';


const routes: Routes = [
  {path: '' ,
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate: [GuardGuard], data: { expectedRol: ['admin', 'user']}},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: '**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
