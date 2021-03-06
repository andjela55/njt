import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { ReportComponent } from './report/report.component';
import { PatientReportsComponent } from './patient-reports/patient-reports.component';
import { PatinetReviewsComponent } from './patinet-reviews/patinet-reviews.component';
import { WelcomeDoctorComponent } from './welcome-doctor/welcome-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { OneReportComponent } from './one-report/one-report.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListPatientComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    ReviewComponent,
    ReportComponent,
    PatientReportsComponent,
    PatinetReviewsComponent,
    WelcomeDoctorComponent,
    OneReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
