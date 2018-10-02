import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel align-right">
            <div class="panel__layout shrink">
                <button class="button" [disabled]="isDisabled()" (click)="callback.detail(data)" type="button">
                    Детали
                </button>
            </div>
        </div>
    `
})
export class DetailComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public isDisabled() {
        return false;
    }
}
