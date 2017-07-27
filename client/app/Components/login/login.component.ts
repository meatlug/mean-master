import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Users } from '../../Models/user.model';
import { UserValidator } from "../../Validators/user.validator";
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private fb: FormBuilder) {
        this.loginForm = fb.group({
            userName: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(5), Validators.maxLength(5)]), UserValidator.UserNameCheck],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
        });
    }
    user = new Users('', '');

    ngOnInit() { }

    loginForm: FormGroup;
}
