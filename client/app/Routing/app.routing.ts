import { AuthGuard } from './../Guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { PathNotFoundComponent } from '../Components/pathNotFound/pathNotFound.component';
import { NoAccessComponent } from '../Components/noAccess/noAccess.component';
import { SignUpComponent } from '../Components/signup/signup.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { Title: 'Login' } },
    { path: 'signup', component: SignUpComponent, data: { Title: 'Sign Up' } },
    { path: 'profile', component: DashboardComponent, data: { Title: 'Profile' }, canActivate: [AuthGuard]},
    { path: 'no-access', component: NoAccessComponent, data: {Title: 'No Access'} },
    // this route should be the last one
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent, data: { Title: '404' } }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
