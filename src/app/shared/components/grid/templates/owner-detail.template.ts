import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel align-right">
            <button class="button button--primary" (click)="callback.owner(data)">Данные сбора</button>
        </div>
    `
})
export class OwnerDetailComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public isDisabled() {
        return false;
    }
}
