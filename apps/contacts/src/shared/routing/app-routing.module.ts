import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../app/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../app/forgot-password/forgot-password.component';
import { SignInComponent } from '../../app/sign-in/sign-in.component';
import { SignUpComponent } from '../../app/sign-up/sign-up.component';
import { VerifyEmailComponent } from '../../app/verify-email/verify-email.component';

// Import all the components for which navigation service has to be activated
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
