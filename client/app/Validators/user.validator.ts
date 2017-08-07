import {  AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from '../Services/login.service';

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

  static UserNameCheck(control: AbstractControl, service: LoginService): Promise<ValidationErrors | null> {

    return new Promise((resolve, reject) => {
      service.checkUserDetails(control.value).subscribe(
        data => {
          if (data.length === 0 || data.length === 1) {
            resolve(null);
          } else {
            resolve({ EmpIdCheck: true });
          }
        },
        err => {
          resolve({ EmpIdCheck: true });
        }
      );
    });
  }

  constructor() {}
}
