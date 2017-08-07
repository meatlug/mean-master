import { SignUpService } from './Services/signup.service';
import { ButtonThemeDirective } from './Direcitves/buttonTheme.directive';
import { SignUpComponent } from './Components/signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from '../app/Routing/app.routing';
import { Constants } from '../app/Constants/app.constant';
import { AuthGuard } from './Guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppService } from '../app/Services/app.service';
import { LoginService } from '../app/Services/login.service';
import { AuthenticateService } from './Services/auth.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PathNotFoundComponent } from './Components/pathNotFound/pathNotFound.component';
import { UserValidator } from './Validators/user.validator';
import { NoAccessComponent } from './Components/noAccess/noAccess.component';
import { DashBoardService } from "./Services/dashboard.service";

@NgModule({
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    NoAccessComponent,
    SignUpComponent,
    ButtonThemeDirective
  ],
  providers: [
    Title,
    Constants,
    AppService,
    LoginService,
    SignUpService,
    DashBoardService,
    UserValidator,
    AuthenticateService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
