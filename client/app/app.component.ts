import { Component } from '@angular/core';

@Component({
  selector: 'mean-app',
  template: `<router-outlet></router-outlet>`,
  styles: [`.class1 {
    font-family: 'Mako', sans-serif;
    letter-spacing: .1em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #dffeff;
    color: #32797c;
}`]
})
export class AppComponent { }
