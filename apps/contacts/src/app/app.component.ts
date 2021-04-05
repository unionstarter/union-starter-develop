import { AuthService } from './../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'union-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contacts';

  constructor(public authService: AuthService) {}
}
