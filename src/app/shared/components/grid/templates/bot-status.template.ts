import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel__layout">
            <span class="sub-text sub-text--{{getColorReason(data?.auth_status?.code)}}">
                {{data?.auth_status?.name}}
            </span>
        </div>
    `
})

export class BotStatusTemplate implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public getColorReason(color: string) {
        switch (color) {
            case 'crawler_error':
                return 'alert';
            case 'authorized':
                return 'success';
            case 'waiting_for_code':
                return 'warning';
            default:
                return 'secondary';
        }
    }
}
