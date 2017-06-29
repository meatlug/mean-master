import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { PathNotFoundComponent } from '../Components/pathNotFound/pathNotFound.component';
const routes: Routes = [
    { path: 'path', component: AppComponent },
    { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent,PathNotFoundComponent];