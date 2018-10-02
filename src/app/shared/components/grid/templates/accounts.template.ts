import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel__layout" >
            <div class="screenshot-viewer__body">
                <div class="screenshot-viewer__item">
                    <div class="screenshot-viewer__field field">
                        <div class="field__layout">
                            <span class="sub-text--secondary"></span>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item ">
                               <span class="sub-text bold">{{ data.task_type.platform.name }}</span>
                            </div>
                        </div>
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                Id: {{ data.entity_id }}
                            </div>
                        </div>
                        <!-- <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                Имя: {{ data.entity_id }}
                            </div>
                        </div>-->
                        <div class="field__layout">
                            <div class="screenshot-viewer__item">
                                <a class="link link--" [href]="data.url" target="_blank">{{ data.url }} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AccountsComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
