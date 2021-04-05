import { PhoneNumber } from './models/phoneNumber';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: firebase.User;

  constructor(
    public angularFireStore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      console.log('authState fires', user);
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });

    this.angularFireAuth.user.subscribe((user) => {
      console.log('user from user sub', user);
    });
  }

  async SignIn(email: string, password: string) {
    await this.angularFireAuth.setPersistence(
      firebase.auth.Auth.Persistence.LOCAL
    );
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        await this.SetUserData(result.user);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email: string, password: string) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.SendVerificationMail();
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async GetCurrentUser() {
    return await this.angularFireAuth.currentUser;
  }

  async SendVerificationMail() {
    const currentUser = await this.GetCurrentUser();
    return currentUser.sendEmailVerification().then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  async AuthLogin(provider) {
    return this.angularFireAuth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return this.angularFireAuth
          .signInWithPopup(provider)
          .then(async (result) => {
            await this.SetUserData(result.user);
            this.router.navigate(['dashboard']);
          })
          .catch((error) => {
            window.alert(error);
          });
      });
  }

  SetUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  UpdateDisplayName(name: string) {
    this.userData.updateProfile({
      displayName: name,
    });
  }

  LinkPhoneNumber(
    phoneNumber: string,
    applicationVerifier: firebase.auth.RecaptchaVerifier
  ) {
    return this.userData.linkWithPhoneNumber(phoneNumber, applicationVerifier);
  }

  ConfirmPhoneNumber(
    confirmation: firebase.auth.ConfirmationResult,
    code: string
  ) {
    confirmation
      .confirm(code)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  SignOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  CreateCaptcha() {
    return new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }
}
