import { AuthService } from './../../../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'union-starter-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(public authService: AuthService) {}
}
