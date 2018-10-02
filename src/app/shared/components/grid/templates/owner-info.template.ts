
import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="field">
            <div class="field__item">
                <span class="sub-text"> {{ data.performer.email }} </span>
            </div>
            <div class="field__item">
                <span class="sub-text sub-text--secondary sub-text--nowrap"> {{ data.start_date | date:'medium' }} </span>
            </div>
        </div>
        `
})
export class OwnerInfoTemplate implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
