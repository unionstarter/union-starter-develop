import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { AppRoutingModule } from '../shared/routing/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import {
  SignInComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  VerifyEmailComponent,
  UpdatePhoneComponent,
} from './auth';
import { ProfileComponent } from './profile/profile.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';

console.log('env', environment);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UpdatePhoneComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    MaterialImportsModule,
  ],
  providers: [
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9099] : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8080] : undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
