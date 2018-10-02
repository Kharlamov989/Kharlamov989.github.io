import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';
import { CoreModule } from '../../../core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    providers: [
        HeaderService
    ],
    imports: [
        CommonModule,
        CoreModule,
        HttpClientModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent
    ],
  })

  export class HeaderModule {}
