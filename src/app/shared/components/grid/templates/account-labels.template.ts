
import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `<div *ngFor="let account of data.accounts">
            <div class="field" *ngFor="let detail of account.detailed_labels">
                <div class="field__label field__label--pink">
                    {{detail?.label?.name}}
                </div>
            </div>
        </div>
        `
})
export class AccountLabelsTemplate implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
