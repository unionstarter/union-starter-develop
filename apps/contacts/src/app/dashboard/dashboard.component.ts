import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'union-starter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) {}
}
