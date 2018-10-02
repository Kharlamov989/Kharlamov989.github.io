import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { NewComponent } from './stages/new/new.component';
import { CoreModule } from '../../core/core.module';
import { AccountDetailModalComponent } from './components/account-detail-modal/account-detail-modal.component';
import { MainService } from './main.service';
import { FormsModule } from '@angular/forms';
import { ChangeStageModalComponent } from './components/change-stage-modal/change-stage-modal.component';
import { TaskModalComponent } from './components/task.modal/task-modal.component';
import { RepostModalComponent } from './components/repost-modal/repost-modal.component';
import { RemoveModalComponent } from './components/remove-modal/remove-modal.component';


@NgModule({
    imports: [
        CoreModule,
        SharedModule,
        MainRoutingModule,
        FormsModule
    ],
    providers: [
        MainService
    ],
    declarations: [
        NewComponent,
        AccountDetailModalComponent,
        ChangeStageModalComponent,
        TaskModalComponent,
        RepostModalComponent,
        RemoveModalComponent
    ]
})

export class MainModule { }
