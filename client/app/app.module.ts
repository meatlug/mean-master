import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routing } from '../app/Routing/app.routing';
import { Constants } from '../app/Constants/app.constant';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from '../app/Services/app.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { PathNotFoundComponent } from './Components/pathNotFound/pathNotFound.component';


@NgModule({
  imports: [BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [AppComponent, PathNotFoundComponent, LoginComponent, NavbarComponent],
  providers: [AppService, Constants],
  bootstrap: [AppComponent]
})
export class AppModule {
  Constructor() {

  }
}
