import { Component, Input } from '@angular/core';
import { ModalBaseComponent } from '../../../../shared/components/modal/modal.base.component';
import { Organization } from '../../../../models/organization';
import { StorageProvider } from '../../../../core/storage-provider';


@Component({
    selector: 'remove-modal',
    templateUrl: './remove-modal.component.html'
})

export class RemoveModalComponent extends ModalBaseComponent {
    @Input() public model: Organization;
    @Input() public callback: Function;

    constructor(
        private storageProvider: StorageProvider

    ) {
        super();
    }

    public remove() {
        let organizations: Organization[] = this.storageProvider.get('organizations');
        organizations = organizations ? organizations : []

        let newOrg = organizations.filter((e) => {
            if(e.id != this.model.id) {
                return e;
            }
        })

        this.storageProvider.set('organizations', newOrg);

        this.close();
        this.callback();
    }
}
