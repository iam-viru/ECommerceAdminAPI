// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
/*import { ClientsComponent } from './clients/clients.component';*/
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      } 
    ]
  },
/* { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  /* { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },*/
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
