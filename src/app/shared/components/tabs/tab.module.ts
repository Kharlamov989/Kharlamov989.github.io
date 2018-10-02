import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TabService } from './service';
import { MainTabsComponent } from './components/main-tabs/main.tabs.component';
import { TabsBaseComponent } from './components';


@NgModule({
    declarations: [
        MainTabsComponent,
        TabsBaseComponent
    ],
    providers: [
        TabService,
        MainTabsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

    ],
    exports: [
        MainTabsComponent
    ],
  })

  export class TabModule {}
