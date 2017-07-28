import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import '../content/style.css';

@Component({
  selector: 'mean-app',
  template: `<router-outlet></router-outlet>`,
  styleUrls: []
})
export class AppComponent implements OnInit, OnDestroy {


  constructor(private titleService: Title, private router: Router) { }

  ngOnInit() {
    const self = this;
    let Header: any;

    setTimeout(function () {
      self.router.config.forEach((router) => {
        if (self.router.url === '/' + router.path) {
          Header = router.data;
        }
      });
      self.titleService.setTitle(Header.Title);
    }, 1000);
  }

  ngOnDestroy() { }
}
