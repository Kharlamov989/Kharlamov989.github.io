import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    GridComponent,
    TemplateProvider,
    TemplateWrapper,
    PaginationComponent
} from './components';

import {
    Utils
} from './utils';
import { ActionComponent, DescriptionTemplate, DetailComponent, ParticipantInfoComponent, LabelsTemplate, OwnerInfoTemplate, AccountsComponent, AccountsDetailComponent, AccountLabelsTemplate, AccountDateTemplate, OwnerDetailComponent, PostsTemplate, MemberStatusComponent, PostStatusComponent, BotStatusTemplate, EndDateTemplate, RepostComponent } from './templates';
import { ParticipantsTemplate } from './templates/participants.template';
import { DateTemplate } from './templates/date.template';
import { FilterService, FilterDataService, FilterComponent } from './components/filter';

@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    providers: [
        Utils,
        FilterService,
        FilterDataService,
    ],
    declarations: [
        GridComponent,
        PaginationComponent,
        TemplateProvider,
        TemplateWrapper,
        // Grid templates
        ActionComponent,
        DescriptionTemplate,
        ParticipantsTemplate,
        DateTemplate,
        DetailComponent,
        ParticipantInfoComponent,
        LabelsTemplate,
        OwnerInfoTemplate,
        AccountsComponent,
        AccountsDetailComponent,
        AccountLabelsTemplate,
        AccountDateTemplate,
        OwnerDetailComponent,
        PostsTemplate,
        MemberStatusComponent,
        PostStatusComponent,
        FilterComponent,
        BotStatusTemplate,
        EndDateTemplate,
        RepostComponent
    ],
    exports: [
        GridComponent
    ],
    entryComponents: [
        // Grid templates
        ActionComponent,
        DescriptionTemplate,
        ParticipantsTemplate,
        DateTemplate,
        DetailComponent,
        ParticipantInfoComponent,
        LabelsTemplate,
        OwnerInfoTemplate,
        AccountsComponent,
        AccountsDetailComponent,
        AccountLabelsTemplate,
        AccountDateTemplate,
        OwnerDetailComponent,
        PostsTemplate,
        MemberStatusComponent,
        PostStatusComponent,
        BotStatusTemplate,
        EndDateTemplate,
        RepostComponent
    ]
  })

  export class GridModule {}
