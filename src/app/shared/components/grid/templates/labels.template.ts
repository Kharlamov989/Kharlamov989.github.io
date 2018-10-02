
import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
            <div class="field" *ngFor="let detail of data.detailed_labels">
                <div class="field__label field__label--pink">
                    {{detail?.label?.name}}
                </div>
            </div>
            <div class="field">
                <button class="button button--primary" (click)="callback.addLabel(data)">+</button>
            </div>
        `
})
export class LabelsTemplate implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
