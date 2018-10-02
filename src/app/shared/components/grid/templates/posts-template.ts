
import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="modal-box__post">
        <div class="modal-box__post--text">
        {{ data.crw_text }}
        </div>
            <table class="table table--small table--tertiary">
                <tbody class="table__tbody">
                    <tr class="table__row">
                        <td class="table__td">
                            <span class="sub-text--secondary">Автор:</span>
                            <span>{{ data.account?.crw_fullname }}</span>
                        </td>
                    </tr>
                    <tr class="table__row">
                        <td class="table__td">
                            <span class="sub-text--secondary">Опубликовано:</span>
                            {{ data.crw_published_date | date:'medium' }}
                        </td>
                        <td class="table__td" colspan="3">
                            <span class="sub-text--secondary">Ссылка на пост:</span>
                            <a class="link" [href]="'https://www.facebook.com/' + data.crw_id" target="_blank">{{ 'https://www.facebook.com/' + data.crw_id }}</a>
                        </td>
                   
                    </tr>
                </tbody>
            </table>
        </div>
        `
})
export class PostsTemplate implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
