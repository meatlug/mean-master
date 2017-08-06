import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'no-access',
    templateUrl: 'noAccess.component.html',
    styleUrls:['noAccess.component.css']
})

export class NoAccessComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('hi');
     }
}