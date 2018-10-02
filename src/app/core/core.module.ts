import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorService } from './services/error.service';
import { SerializeService } from './services/serialize.service';
import { StorageProvider } from './storage-provider';
import { RequestCache } from './services/request-cache.service';


@NgModule({
    imports: [CommonModule, RouterModule],
    providers: [
        ErrorService,
        StorageProvider,
        SerializeService,
        RequestCache
    ]
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            //   providers: [ErrorService],
        };
    }
}