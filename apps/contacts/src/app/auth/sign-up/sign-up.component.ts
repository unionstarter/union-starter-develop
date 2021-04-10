import { AuthService } from './../../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'union-starter-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(public authService: AuthService) {}

  getErrorMessage(controlName: string) {
    if (this.signupForm.get(controlName).hasError('required')) {
      return 'You must enter a value';
    }

    if (this.signupForm.get(controlName).hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }
}
