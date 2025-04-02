// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Cambiado para que la ruta predeterminada sea el login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
