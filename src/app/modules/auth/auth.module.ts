import { NgModule } from '@angular/core';


import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';
import { CoreModule } from '../../core/core.module';
import { AuthGuard } from './auth-guard.service';

@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        AuthRoutingModule
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    declarations: [
        AuthComponent
    ]
})

export class AuthModule { }
