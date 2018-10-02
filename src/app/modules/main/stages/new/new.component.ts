import { Component, Input, Output, ViewChild } from '@angular/core';

import { OwnerInfoTemplate, AccountsComponent, AccountsDetailComponent, AccountLabelsTemplate, AccountDateTemplate, OwnerDetailComponent, ActionComponent } from '../../../../shared/components/grid/templates';
import { ModalState } from '../../../../shared/components/modal/model/modal-state';
import { MainService } from '../../main.service';
import { MainTabsComponent } from '../../../../shared/components/tabs/components/main-tabs/main.tabs.component';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageProvider } from '../../../../core/storage-provider';
import { Organization } from '../../../../models/organization';

@Component({
    templateUrl: './new.component.html',
    host: { class: 'layout__block layout__block--content' }
})
export class NewComponent {
    @Input() public currentRow: Organization = new Organization();
    @Input() public accountSubject: Subject<any> = new Subject<any>()
    @Input() public removeModal: ModalState = new ModalState(false);
    @Input() public taskModalState: ModalState = new ModalState(false);
    @Output() public selectedRow: number[] = [];
    @Output() public list = [];


    public columns: any[] = [
        { title: 'Название организации', name: 'name' },
        { title: 'Адрес', name: 'address' },
        { title: 'Описание', name: 'decription' },
        { title: 'Сайт', name: 'site' },
        { title: 'Тип услуг', name: 'service' },
        { title: 'Телефон', name: 'tel' },
        { template: ActionComponent, callback: { edit: this.openTaskModal.bind(this), remove: this.openRemoveModal.bind(this) } }
    ];
    @ViewChild('grid') public grid;

    constructor(
        public mainService: MainService,
        public tabs: MainTabsComponent,
        private storageProvider: StorageProvider
    ) {
        if (this.storageProvider.get('organizations')) {
            this.list = this.storageProvider.get('organizations');
        } else {
            this.list = [
                {
                    id: '1',
                    name: 'Пятерочка',
                    address: 'р. Комарова, 14 корпус 1,',
                    decription: 'Продовольственный магазин',
                    site: 'https://5ka.ru/',
                    service: 'магазин',
                    tel: ' 8 (800) 555-55-05'
                },
                {
                    id: '2',
                    name: 'Эльдорадо',
                    address: 'пр-кт Комарова 2/2',
                    decription: 'Электротехника',
                    site: 'www.eldorado.ru',
                    service: 'магазин',
                    tel: ' 8 (381) 240-54-76'
                },
                {
                    id: '3',
                    name: 'Шашлыкофф‎',
                    address: '70 лет октября 24',
                    decription: 'Кафе',
                    site: 'shashlikoff.com',
                    service: 'питание',
                    tel: '8 (381) 292-50-94'
                }
            ];

           this.storageProvider.set('organizations', this.list);
        }
    }

    public openTaskModal(currentRow: Organization): void {
        this.currentRow = { ...currentRow };
        this.taskModalState = { isOpen: true };
    }

    public openRemoveModal(currentRow: Organization): void {
        this.currentRow = { ...currentRow };
        this.removeModal = { isOpen: true };
    }

    public refresh(): void {
        this.list = this.storageProvider.get('organizations');
    }
}
