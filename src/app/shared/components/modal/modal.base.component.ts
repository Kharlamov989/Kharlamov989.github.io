import {
    Component,
    Input
} from '@angular/core';
import { ModalState } from './model/modal-state';


@Component({
    template: ''
})
export class ModalBaseComponent {
    private internalState: ModalState = new ModalState(false);

    @Input() set modalState(modalState) {
        this.hasChangeState(modalState.isOpen);

        modalState.isOpen ? this.onOpen(modalState.isOpen) : this.onClose(modalState.isOpen);
        this.internalState = modalState;
    }

    get modalState (): ModalState {
        return this.internalState;
    }

    public close(): void {
        this.modalState = new ModalState(false);
    }

    // tslint:disable-next-line:no-empty
    public onOpen(state: boolean): void {};
    // tslint:disable-next-line:no-empty
    public onClose(state: boolean): void {};
    // tslint:disable-next-line:no-empty
    public hasChangeState (state: boolean): void {};
}
