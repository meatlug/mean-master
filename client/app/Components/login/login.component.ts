import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Users } from '../../Models/user.model';
import { UserValidator } from '../../Validators/user.validator';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styles: [`.loginForm {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 25%;
        margin: auto;
        background-color:white;
        text-align:center;
        }
    .container{
        padding:15px;
        }`]
})

export class LoginComponent implements OnInit {

    user = new Users('', '');
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = fb.group({
            userName: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(5), Validators.maxLength(5)]), UserValidator.UserNameCheck],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
        });
    }
    ngOnInit() { }
}
