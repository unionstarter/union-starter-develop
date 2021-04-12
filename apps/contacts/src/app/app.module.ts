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
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { InfoCardComponent } from './user-profile/info-card/info-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { InfoCardRowComponent } from './user-profile/info-card-row/info-card-row.component';
import { InfoCardRowTitleComponent } from './user-profile/info-card-row-title/info-card-row-title.component';

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
    UserProfileComponent,
    NavMenuComponent,
    InfoCardComponent,
    InfoCardRowComponent,
    InfoCardRowTitleComponent,
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
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
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
  entryComponents: [InfoCardRowTitleComponent],
})
export class AppModule {}
