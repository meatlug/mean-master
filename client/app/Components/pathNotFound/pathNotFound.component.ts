import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'path-not-found',
    templateUrl: 'pathNotFound.component.html',
    styleUrls: ['pathNotFound.component.css']
})

export class PathNotFoundComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    navigateToLogin(){
        this.router.navigate(['login']);
    }

    navigateToProfile(){
        this.router.navigate(['profile']);
    }
}
