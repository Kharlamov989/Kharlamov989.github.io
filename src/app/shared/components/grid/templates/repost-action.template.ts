import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel align-right">
            <div class="panel__layout shrink">
                <button class="button" [disabled]="isDisabled()" (click)="callback.showReposts(data)" type="button">
                    Репосты
                </button>
            </div>
        </div>
    `
})
export class RepostComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;

    public isDisabled() {
        return false;
    }
}
