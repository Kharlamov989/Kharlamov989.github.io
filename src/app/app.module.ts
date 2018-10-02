import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './modules/auth/auth-guard.service';
import { HeaderModule } from './shared/components/header/header.module';
import localeRU from '@angular/common/locales/ru';
import { AppState } from './app.service';

registerLocaleData(localeRU);


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HeaderModule
    ],
    providers: [    
        AuthGuard,
        AppState,
        { provide: LOCALE_ID, useValue: 'ru' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
