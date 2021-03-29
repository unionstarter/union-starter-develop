import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _activeUser = {
    email: '',
    name: '',
    verified: false,
  };

  private _error = {
    message: '',
    code: '',
  };

  public GetUser() {
    return this._activeUser;
  }

  public GetError() {
    return this._error;
  }

  private setUser(user) {
    this._activeUser = {
      email: user.email,
      name: user.displayName,
      verified: user.emailVerified,
    };
    this._error = {
      message: '',
      code: '',
    };
  }

  private setError(error) {
    this._error = {
      message: error.message,
      code: error.code,
    };
    this._activeUser = {
      email: '',
      name: '',
      verified: false,
    };
  }

  createNewUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this._activeUser.email = user.email;
      })
      .catch(this.setError);
  }

  signIn(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.setUser(userCredential.user);
      })
      .catch(this.setError);
  }
}
