import { Component, Input } from '@angular/core';
import { GridTemplate } from '../models/gridTemplate';

@Component({
    template:
        `
        <div class="panel align-right">
            <div class="panel__layout shrink">
                <button class="button button--small-icon" (click)="callback.edit(data)" type="button">
                    <span class="button__icon icon icon--baseline">
                        <svg class="icon__svg" viewBox="0 0 2134 2134" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(72.4606,0,0,72.4606,86.4919,-106.29)">
                                <path id="pencil" d="M6.482,27.429L8.107,25.804L3.911,21.608L2.286,23.233L2.286,25.144L4.572,25.144L4.572,27.43L6.483,27.43L6.482,27.429ZM15.821,10.857C15.821,10.595 15.69,10.464 15.428,10.464C15.309,10.464 15.207,10.506 15.124,10.589L5.445,20.268C5.362,20.351 5.32,20.453 5.32,20.572C5.32,20.834 5.451,20.965 5.713,20.965C5.832,20.965 5.934,20.923 6.017,20.84L15.696,11.161C15.779,11.078 15.821,10.976 15.821,10.857L15.821,10.857ZM14.857,7.429L22.286,14.858L7.429,29.715L0,29.715L0,22.286L14.857,7.429ZM27.054,9.143C27.054,9.774 26.834,10.309 26.393,10.75L23.429,13.714L16,6.285L18.964,3.339C19.393,2.886 19.928,2.66 20.571,2.66C21.202,2.66 21.743,2.886 22.196,3.339L26.392,7.518C26.833,7.982 27.053,8.524 27.053,9.143L27.054,9.143Z" style="fill-rule:nonzero;"/>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="panel__layout shrink">
                <button class="button button--small-icon" (click)="callback.remove(data)" type="button">
                    <span class="button__icon icon icon--baseline">
                        <svg class="icon__svg" viewBox="0 0 2134 2134" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(92.1348,0,0,92.1348,-91.6518,-512.8)">
                                <path id="remove" d="M23.179,23.607C23.179,24.083 23.012,24.488 22.679,24.821L20.25,27.25C19.917,27.583 19.512,27.75 19.036,27.75C18.56,27.75 18.155,27.583 17.822,27.25L12.572,22L7.322,27.25C6.989,27.583 6.584,27.75 6.108,27.75C5.632,27.75 5.227,27.583 4.894,27.25L2.465,24.821C2.132,24.488 1.965,24.083 1.965,23.607C1.965,23.131 2.132,22.726 2.465,22.393L7.715,17.143L2.465,11.893C2.132,11.56 1.965,11.155 1.965,10.679C1.965,10.203 2.132,9.798 2.465,9.465L4.894,7.036C5.227,6.703 5.632,6.536 6.108,6.536C6.584,6.536 6.989,6.703 7.322,7.036L12.572,12.286L17.822,7.036C18.155,6.703 18.56,6.536 19.036,6.536C19.512,6.536 19.917,6.703 20.25,7.036L22.679,9.465C23.012,9.798 23.179,10.203 23.179,10.679C23.179,11.155 23.012,11.56 22.679,11.893L17.429,17.143L22.679,22.393C23.012,22.726 23.179,23.131 23.179,23.607Z" style="fill-rule:nonzero;"/>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    `
})
export class ActionComponent implements GridTemplate {
    @Input() public data: any;
    @Input() public callback: any;
}
