import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './modules/auth/auth-guard.service';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
    { path: 'login', loadChildren: './modules/auth/auth.module#AuthModule' },
    // { path: "", redirectTo: "/messengers", pathMatch: "full" },
    {
        path: '', children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            {
                path: 'main',
                loadChildren: './modules/main/main.module#MainModule',
                canActivate: [AuthGuard] 
            },
            { path: '', component: HeaderComponent, outlet: 'header' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
    