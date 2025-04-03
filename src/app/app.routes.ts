// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MainInterfaceComponent } from './main-interface/main-interface.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'main', component: MainInterfaceComponent}
];
