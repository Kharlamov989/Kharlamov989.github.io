export class ModalState {
    public isOpen: boolean;
    public data?: any;

    constructor(isOpen: boolean) {
        this.isOpen = isOpen;
    }
}
