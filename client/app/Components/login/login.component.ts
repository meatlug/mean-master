import { AuthenticateService } from '../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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
    loginForm: FormGroup;
    returnUrl: string;

    constructor(private router: Router,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private loginService: LoginService,
                private authenticate: AuthenticateService ) {

        this.loginForm = fb.group({
            Email: ['',
                       Validators.compose([Validators.required,
                                           Validators.pattern("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/i")])],
            Password: ['',
                       Validators.compose([Validators.required,
                                           Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/'),
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
     };

    LoginCheck(loginForm: FormGroup) {
        if (!loginForm.value) { return; }
        console.log(loginForm.value);
        this.loginService
            .checkUserDetails(loginForm.value)
             .subscribe(response => {
                    this.router.navigate(['/profile']);
            },
            error => this.errorMessage = <any>error,
            () => console.log('Get all Items complete'));
    }
}
