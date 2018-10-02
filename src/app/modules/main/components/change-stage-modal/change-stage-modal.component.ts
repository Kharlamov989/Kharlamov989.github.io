import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { ModalBaseComponent } from '../../../../shared/components/modal/modal.base.component';
import { MainService } from '../../main.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
    selector: 'change-stage-modal',
    templateUrl: './change-stage-modal.component.html'
})

export class ChangeStageModalComponent extends ModalBaseComponent {
    @Input() public callback: Function;
    @Input() public ids: any;
    @Input() public nextStage: string;
    @Input() public region: any;
    public comment: string;

    constructor(
        public identificationService: MainService,
        private fb: FormBuilder,
    ) {
        super();
    }

    public submit(): Observable<any> {
        return this.identificationService.moveToStage(this.nextStage, { person_ids: this.ids, comment: this.comment, region_id: this.region.id }).pipe(
            map(() => {
                this.callback()
                this.close();
            })
        );
    }

    public close() {
        this.modalState.isOpen = false;
        this.comment = '';
        this.region = null;
    }
}
