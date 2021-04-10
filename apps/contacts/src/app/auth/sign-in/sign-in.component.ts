import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'union-starter-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(public authService: AuthService) {}

  getErrorMessage(controlName: string) {
    if (this.loginForm.get(controlName).hasError('required')) {
      return 'You must enter a value';
    }

    if (this.loginForm.get(controlName).hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }
}
