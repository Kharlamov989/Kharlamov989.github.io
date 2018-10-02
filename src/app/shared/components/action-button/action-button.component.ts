import { Component, Input } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'action-button',
    template:
        ` 
        <div class="panel__layout" *ngIf="isPending && loaderPositionRight === false">
            <div class="loader loader--large">
                <svg class="loader__svg" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px"
                    viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                    <path class="loader__cyrcle" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path class="loader__runner" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                            C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(82.3618 20 20)">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>
        </div>
        <div class="panel__layout shrink">
            <button class="button" [ngClass]="className" type="button" (click)="onClick()" [disabled]="isPending || isDisabled">
                {{ title }}
                <ng-content></ng-content>
            </button>
        </div>
        <div class="panel__layout" *ngIf="isPending && loaderPositionRight === true">
            <div class="loader loader--large">
                <svg class="loader__svg" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px"
                    viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                    <path class="loader__cyrcle" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path>
                    <path class="loader__runner" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                            C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(82.3618 20 20)">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>
        </div>
    `,
    host: { class: 'panel shrink' }
})
export class ActionButtonComponent {
    @Input() title: string;
    @Input() errorText: string;
    @Input() className: string;
    @Input() action: Function;
    @Input() isDisabled: boolean = false;
    @Input() loaderPositionRight: boolean = false;
    public isPending: boolean = false;

    constructor(
        private notifier: NotifierService,
    ) {}

    public async onClick(): Promise<void> {
        this.isPending = true;
        this.action().subscribe(
            (e) => {
            this.isPending = false;
            },
            (e) => {
                this.isPending = false;
                this.notifier.notify('error', this.errorText || e.error.api_errors[0].msg);
            }
        );
    }
}
