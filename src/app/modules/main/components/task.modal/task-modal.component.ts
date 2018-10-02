import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


import { MainService } from '../../main.service';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { ModalBaseComponent } from '../../../../shared/components/modal/modal.base.component';
import { Task } from '../../../../models/task';
import { Organization } from '../../../../models/organization';
import { StorageProvider } from '../../../../core/storage-provider';

@Component({
    selector: 'task-modal',
    templateUrl: './task-modal.component.html'
})

export class TaskModalComponent extends ModalBaseComponent {
    @Input() public callback: Function;
    @Input() public taskSubject: Subject<any> = new Subject<any>();
    public taskType: any;
    @Input() public model: Organization = new Organization();

    constructor(
        public botsService: MainService,
        private fb: FormBuilder,
        private notifier: NotifierService,
        private storageProvider: StorageProvider

    ) {
        super();
    }

    public save() {
        let organizations: Organization[] = this.storageProvider.get('organizations');
        organizations = organizations ? organizations : []


        if (this.model.id) {
            let newOrg: Organization[] = organizations.map((e) => {
                if (e.id == this.model.id) {
                    e = this.model;
                }

                return e;
            })

            this.storageProvider.set('organizations', newOrg);
        } else {
            this.model.id = Math.random().toString(16) + "000000000".substr(2, 8);
            organizations.push(this.model);
            this.storageProvider.set('organizations', organizations);
        }

        this.callback()
        this.close();
    }

    public close() {
        this.modalState.isOpen = false;
        this.model = new Organization()
    }
}
