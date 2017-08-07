import { Component, OnInit ,OnDestroy} from '@angular/core';
import { DashBoardService } from '../../Services/dashboard.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit,OnDestroy {
    constructor(private service: DashBoardService, private route: ActivatedRoute, private router: Router) { 

    }
    userDetails;
    sub;

    ngOnInit() {
        let id ;
        this. sub = this.route.params.subscribe(params => {
         id = +params['response']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
            });
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                    this.service
                        .getUserDetails(id))
                        .subscribe((hero) => {
                            this.userDetails = hero;
                });

                //this.route.paramMap.switchMap((params: ParamMap) => console.log(params.get('response')))
        console.log(this.userDetails);
     }
    ngOnDestroy(){
    this.sub.unsubscribe();
    }
}
