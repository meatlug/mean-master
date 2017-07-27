import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from '../app/Routing/app.routing';
import { Constants } from '../app/Constants/app.constant';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AppService } from '../app/Services/app.service';
import { LoginService } from '../app/Services/login.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PathNotFoundComponent } from './Components/pathNotFound/pathNotFound.component';
import { UserValidator } from "./Validators/user.validator";

@NgModule({
  imports: [BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [AppComponent, PathNotFoundComponent, LoginComponent, NavbarComponent],
  providers: [Constants, AppService, LoginService, UserValidator],
  bootstrap: [AppComponent]
})
export class AppModule {
  Constructor() {

  }
}
