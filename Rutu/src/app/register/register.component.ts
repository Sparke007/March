import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  minPw = 8;
  formGroup: FormGroup;

  Departments: any = ['Accounts and Finance',
    'HR',
    'Sales and marketing (Business development)',
    'Infrastructures',
    'Research and development',
    'Learning and development',
    'IT services',
    'Product development',
    'Admin department',
    'Security and transport'];
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      password2: ['', [Validators.required]]
    }, {validator: passwordMatchValidator});
  }
  get password() { return this.formGroup.get('password'); }
  get password2() { return this.formGroup.get('password2'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.formGroup.hasError('passwordMismatch'))
      this.password2.setErrors([{'passwordMismatch': true}]);
    else
      this.password2.setErrors(null);
  }

}
export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('password2').value)
    return null;
  else
    return {passwordMismatch: true};
};
