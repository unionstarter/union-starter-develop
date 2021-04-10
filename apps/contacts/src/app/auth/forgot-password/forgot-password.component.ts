import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'union-starter-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  passwordResetEmail = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public authService: AuthService) {}

  getErrorMessage() {
    if (this.passwordResetEmail.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.passwordResetEmail.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }
}
