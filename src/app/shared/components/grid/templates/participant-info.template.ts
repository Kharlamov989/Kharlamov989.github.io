import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel__layout">
            <div class="screenshot-viewer__body">
                <div class="screenshot-viewer__item">
                    <div class="screenshot-viewer__field field">
                        <div class="field__layout">
                            <span class="sub-text--secondary">{{data?.crw_fullname}}</span>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                <span class="sub-text sub-text--primary">{{data?.crw_name}}</span>
                            </div>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                Id: {{data.crw_id}}
                            </div>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                Url: <a class="link link--" [href]="data.crw_url" target="_blank">&nbsp;{{ data.crw_url }} </a>
                            </div>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                Псевдоним: {{data.crw_screen_name ? data.crw_screen_name : 'Не указано'}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ParticipantInfoComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;


}
