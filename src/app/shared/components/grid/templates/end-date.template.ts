import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template: 
    `
        <div class="field">

            <div class="field__item">
                <span class="sub-text sub-text--secondary sub-text--nowrap"> {{ data.done_date | date:'medium' }} </span>
            </div>
        </div>
    `
})

export class EndDateTemplate implements GridTemplate {
    @Input() public data: any;
}
