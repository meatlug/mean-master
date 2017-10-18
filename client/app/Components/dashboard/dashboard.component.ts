import { Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { DashBoardService } from '../../Services/dashboard.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
    userDetails;
    sub;

    constructor(private service: DashBoardService, private route: ActivatedRoute, private router: Router) { 

    }


    ngOnInit() {
        
     }

     ngOnChanges(changes){
         console.log(changes);
     }

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }


}
