import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ProfileComponent } from './profile';
import { AuthGuard } from './helper';
import { ForgotpwdComponent } from './forgotpwd';
import { ChangepwdComponent } from './changepwd';
import { DashboardComponent } from './dashboard';
import { AdmissionComponent } from './admission';
import { AttendanceComponent } from './attendance';
import { StudentComponent } from './student';
import { TimetableComponent } from './timetable';
import { ExaminationComponent } from './examination';
import { FinanceComponent } from './finance';
import { HrComponent } from './hr';
import { UtilityComponent } from './utility';
import { ReportComponent } from './report';
import { LinkComponent } from './link';
import { FeeComponent } from './fee';
import { LibraryComponent } from './library';
import { ComplainComponent } from './complain';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard] },
    { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
    { path: 'timetable', component: TimetableComponent, canActivate: [AuthGuard] },
    { path: 'examination', component: ExaminationComponent, canActivate: [AuthGuard] },
    { path: 'finance', component: FinanceComponent, canActivate: [AuthGuard] },
    { path: 'hr', component: HrComponent, canActivate: [AuthGuard] },
    { path: 'utility', component: UtilityComponent, canActivate: [AuthGuard] },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
    { path: 'link', component: LinkComponent, canActivate: [AuthGuard] },
    { path: 'fee', component: FeeComponent, canActivate: [AuthGuard] },
    { path: 'library', component: LibraryComponent, canActivate: [AuthGuard] },
    { path: 'complain', component: ComplainComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotpwd', component: ForgotpwdComponent },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'admission', component: AdmissionComponent, canActivate: [AuthGuard] },
    { path: 'changepwd', component: ChangepwdComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);