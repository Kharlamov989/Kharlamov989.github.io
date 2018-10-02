import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
    `
        <div class="field">
            <div class="field__title">
                <span class="sub-text">{{data.crw_title}}</span>
            </div>
            <div class="field__item field__item--large-mb">
                <a class="link link--" [href]="data.crw_url" target="_blank">{{data.crw_url?.length > 80 ? data.crw_url.slice(0,80) + '...' : data.crw_url}}</a>
            </div>
        </div>
    `
})

export class DescriptionTemplate implements GridTemplate {
    @Input() public data: any;
}
