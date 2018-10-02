import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel__layout">
            <div class="field">
                <div class="field__button"  *ngFor="let account of data.accounts">
                    <button class="button" [disabled]="isDisabled()" (click)="callback.detail(account)" type="button">
                        Детали
                    </button>
                </div>
            </div>
        </div>
    `
})
export class AccountsDetailComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public isDisabled() {
        return false;
    }
}
