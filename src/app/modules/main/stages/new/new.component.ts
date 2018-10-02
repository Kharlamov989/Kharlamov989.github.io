import { Component, Input, Output, ViewChild } from '@angular/core';

import { OwnerInfoTemplate, AccountsComponent, AccountsDetailComponent, AccountLabelsTemplate, AccountDateTemplate, OwnerDetailComponent, ActionComponent } from '../../../../shared/components/grid/templates';
import { ModalState } from '../../../../shared/components/modal/model/modal-state';
import { MainService } from '../../main.service';
import { MainTabsComponent } from '../../../../shared/components/tabs/components/main-tabs/main.tabs.component';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageProvider } from '../../../../core/storage-provider';

@Component({
    templateUrl: './new.component.html',
    host: { class: 'layout__block layout__block--content' }
})
export class NewComponent {
    @Input() public currentRow: any;
    @Input() public accountSubject: Subject<any> = new Subject<any>()
    @Input() public detailModalState: ModalState = new ModalState(false);
    @Input() public taskModalState: ModalState = new ModalState(false);
    @Output() public selectedRow: number[] = [];
    @Output() public list = [];

    public columns: any[] = [
        { title: 'Название организации', name: 'name' },
        { title: 'Адрес', name: 'address' },
        { title: 'Описание', name: 'decription' },
        { title: 'Сайт', name: 'site' },
        { title: 'Тип услуг', name: 'service' },
        { title: 'Телефон', name: 'tel' }
    ];
    @ViewChild('grid') public grid;

    constructor(
        public mainService: MainService,
        public tabs: MainTabsComponent,
        private http: HttpClient,
        private storageProvider: StorageProvider
    ) {
        this.list = this.storageProvider.get('organizations');
    }

    public openTaskModal(): void {
        this.taskModalState = { isOpen: true };
    }

    public refresh(): void {
        this.list = this.storageProvider.get('organizations');
    }
}
