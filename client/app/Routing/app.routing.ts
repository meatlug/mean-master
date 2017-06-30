import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../Components/login/login.component';
import { PathNotFoundComponent } from '../Components/pathNotFound/pathNotFound.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: "", component: LoginComponent },
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);