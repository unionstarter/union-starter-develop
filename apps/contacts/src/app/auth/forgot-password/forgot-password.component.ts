import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'union-starter-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  constructor(public authService: AuthService) {}
}
