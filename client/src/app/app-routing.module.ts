import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { NotFoundComponent } from './components/maintenance/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { TopComponent } from './components/top/top.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'auth', component: AuthComponent, canActivate: [AuthGuard], children: [
    {path: '', canActivateChild: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'maintenance', component: MaintenanceComponent},
      {path: 'top', component: TopComponent},
      {path: 'car-add', component: CarAddComponent},
      {path: 'car-details/:id', component: CarDetailsComponent},
      {path: 'car-edit/:id', component: CarEditComponent},
    ]}
  ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
