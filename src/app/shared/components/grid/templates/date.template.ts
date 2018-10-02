import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template: 
    `
        <div class="field">

            <div class="field__item">
                <span class="sub-text sub-text--secondary sub-text--nowrap"> {{ data.created_date | date:'medium' }} </span>
            </div>
        </div>
    `
})

export class DateTemplate implements GridTemplate {
    @Input() public data: any;
}
