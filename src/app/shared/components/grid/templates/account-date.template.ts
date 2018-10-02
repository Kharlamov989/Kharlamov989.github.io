import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="field">
            <div class="field__item">
                {{ data.created_date | date:'medium' }}
            </div>
            <div class="field__item">
                <span class="sub-text--primary"></span>
            </div>
        </div>
    `
})

export class AccountDateTemplate implements GridTemplate {
    @Input() public data: any;
}
