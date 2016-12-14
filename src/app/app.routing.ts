import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';
import { AuthGuard } from './helper';
import { ForgotpwdComponent } from './forgotpwd';
import { ChangepwdComponent } from './changepwd';
import { DashboardComponent } from './dashboard';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent ,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotpwd', component: ForgotpwdComponent },
     { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'changepwd', component: ChangepwdComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);