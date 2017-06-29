import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PathNotFoundComponent } from './Components/pathNotFound/pathNotFound.Component'
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PathNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
