import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel__layout">
            <span class="sub-text sub-text--{{getColorReason(data.members_grab_status?.code)}}">
                {{data.members_grab_status?.name || 'Не начато'}}
            </span>
        </div>
    `
})

export class MemberStatusComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public getColorReason(color: string) {
        switch (color) {
            case 'error':
                return 'alert';
            case 'done':
                return 'success';
            case 'in_progress':
                return 'warning';
            default:
                return 'secondary';
        }
    }
}
