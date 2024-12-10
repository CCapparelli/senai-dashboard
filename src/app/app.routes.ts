import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './autenticacao/auth.guard';
import { CicloComponent } from './ciclo/ciclo.component';


export const routes: Routes = [
  { path: '', redirectTo: '/ciclo', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ciclo', component: CicloComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

