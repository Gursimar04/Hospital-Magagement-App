import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { PrescriptionComponent } from './prescription/prescription.component';
import { ReportComponent } from './report/report.component';
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,},
  { path: 'signup', component: SignupComponent, canActivate:[AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },
  { path: 'prescription', component: PrescriptionComponent, canActivate:[AuthGuardService] },
  { path: 'report', component: ReportComponent, canActivate:[AuthGuardService] },
  { path: '**', redirectTo: '/login',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
