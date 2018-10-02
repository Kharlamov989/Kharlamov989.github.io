import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './stages/new/new.component';

const routes: Routes = [
    { path: '', redirectTo: 'new', pathMatch: 'full' },
    { path: 'new', component: NewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
