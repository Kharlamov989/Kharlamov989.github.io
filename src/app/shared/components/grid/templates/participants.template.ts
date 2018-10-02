import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="field">
            <div class="field__item">
            <span class="sub-text sub-text--primary bold">{{data.members_count}}</span> / <span class="sub-text sub-text--success bold">{{data.labeled_members_count}}</span>
            </div>
        </div>
    `
})

export class ParticipantsTemplate implements GridTemplate {
    @Input() public data: any;
}
