
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierModule } from 'angular-notifier';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TabModule } from './components/tabs/tab.module';
import { GridModule } from './components/grid';
import { ModalBaseComponent } from './components/modal/modal.base.component';
import { SelectFiledModule } from './components/select-field';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { notifierConfig } from './notifier.config';



@NgModule({
    declarations: [
        ModalBaseComponent,
        ActionButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TabModule,
        GridModule,
        SelectFiledModule,
        NotifierModule.withConfig(notifierConfig)
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TabModule,
        GridModule,
        SelectFiledModule,
        ModalBaseComponent,
        ActionButtonComponent,
        NotifierModule
    ]
})
export class SharedModule { }
