import { AuthenticateService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../Models/user.model';
// import { UserValidator } from '../../Validators/user.validator';
import { LoginService } from '../../Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    errorMessage: string;
    user: User;
    loginForm: FormGroup;
    returnUrl: string;

    constructor(private router: Router,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private loginService: LoginService,
                private authenticate: AuthenticateService ) {

        this.loginForm = fb.group({
            userName: ['',
                       Validators.compose([Validators.required,
                                    Validators.pattern(``),
                                    Validators.minLength(5)])],
            password: ['',
                       Validators.compose([Validators.required,
                                           Validators.minLength(6),
                                           Validators.maxLength(10)])]
        });
    }

    ngOnInit() {
        // reset login status
    this.authenticate.logOut();

        // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);

    this.user = {
            email: '',
            password: ''
        };
     }


    get username(){
        return this.loginForm.get('userName');
    }

    get password(){
        return this.loginForm.get('password');
    }



    LoginCheck() {
        if (!this.user) { return; }
        this.loginService
            .checkUserDetails(this.user)
             .subscribe(response => {
                    this.router.navigate(['/profile']);
            },
            error => this.errorMessage = <any>error,
            () => console.log('Get all Items complete'));
    }
}
