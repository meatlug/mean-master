import { SignUpService } from '../../Services/signup.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from './../../Models/sigup.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sign-up',
    templateUrl: 'signup.component.html',
    styleUrls:['signup.component.css']
})

export class SignUpComponent implements OnInit {
    public signUpForm: FormGroup;
    public signUp: Signup;
    public errorMessage: string;

    constructor(private fb: FormBuilder, private router: Router, private service: SignUpService) {
        this.signUpForm = fb.group({
            firstName: ['', Validators.compose([Validators.required])],
            lastName: [''],
            email: ['', Validators.compose([Validators.required, Validators.pattern('')])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
        });
    }

    ngOnInit() {
        this.signUp = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
     }

    signUpUser(model: Signup) {
            this.service
                .registerUserDetails(model)
                .subscribe(response => {
                    //localStorage.setItem('userDetails', response);
                    this.router.navigate(['/profile']);
            },
            error => this.errorMessage = <any>error,
            () => console.log('Get all Items complete'));
    };
}
