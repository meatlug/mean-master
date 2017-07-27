import { FormControl } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { AppService } from '../Services/app.service';


export class UserValidator {
    // static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    //     let config = {
    //         'required': 'Required field cannot be left empty.',
    //         'invalidEmailAddress': 'Invalid email address',
    //         'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
    //         'minlength': `Minimum length ${validatorValue.requiredLength}`
    //     };

    //     return config[validatorName];
    // }

    constructor() { }

    static UserNameCheck(control: FormControl, service: LoginService) {

        return new Promise<any>((resolve, reject) => {

            // setTimeout(function () {
            //     if (control.value == '91479')
            //         resolve(null);
            //     else
            //         resolve({ EmpIdCheck: true });
            // }, 1000);

            service
                .GetUserDetails(control.value)
                .subscribe(
                data => {
                    if (data.length == 0 || data.length == 1) {
                        resolve(null);
                    } else {
                        resolve({ EmpIdCheck: true });
                    }
                },
                err => {
                    resolve({ EmpIdCheck: true });
                }
                )
        });
    }
}
