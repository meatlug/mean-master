import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { PathNotFoundComponent } from '../Components/pathNotFound/pathNotFound.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { Title: 'Login' } },
    { path: 'profile', component: DashboardComponent, data: { Title: 'Profile' } },
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
