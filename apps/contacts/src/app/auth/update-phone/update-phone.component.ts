import { WindowService } from './../../../shared/services/window.service';
import { AuthService } from './../../../shared/services/auth.service';
import { PhoneNumber } from './../../../shared/services/models/phoneNumber';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';

@Component({
  selector: 'union-starter-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.scss'],
})
export class UpdatePhoneComponent implements OnInit {
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  windowRef: any;
  confirmation: firebase.auth.ConfirmationResult;

  constructor(
    private authService: AuthService,
    private windowService: WindowService
  ) {}

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
    this.windowRef['recaptchaVerifier'] = this.authService.CreateCaptcha();

    this.windowRef['recaptchaVerifier'].render();
  }

  sendVerifyCode() {
    this.authService
      .LinkPhoneNumber(
        this.phoneNumber.e164,
        this.windowRef['recaptchaVerifier']
      )
      .then((confirmationResult) => {
        this.confirmation = confirmationResult;
      });
  }

  confirmPhoneNumber() {
    this.authService.ConfirmPhoneNumber(
      this.confirmation,
      this.verificationCode
    );
  }
}
