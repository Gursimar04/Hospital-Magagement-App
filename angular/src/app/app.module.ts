import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmingComponent } from './confirming/confirming.component';
import { MedicationComponent } from './medication/medication.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { ShowReportComponent } from './show-report/show-report.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { AuthGuardService } from './auth-guard.service'
import { UserAuthenticateService } from './user-authenticate.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PrescriptionComponent,
    ReportComponent,
    NavbarComponent,
    CardComponent,
    CardListComponent,
    BookingComponent,
    ConfirmingComponent,
    MedicationComponent,
    CreateReportComponent,
    ShowReportComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService,
    UserAuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
