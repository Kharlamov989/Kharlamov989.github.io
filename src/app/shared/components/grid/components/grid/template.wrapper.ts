import {
    Component,
    Input,
    AfterViewInit,
    ViewChild,
    ComponentFactoryResolver,
    ChangeDetectorRef
} from '@angular/core';
import { TemplateProvider } from './template.provider';
import { GridTemplate } from '../../models/gridTemplate';

@Component({
    selector: 'template-wrapper',
    template:
    `
        <div>
           <ng-template template-provider></ng-template>
        </div>
    `
})
export class TemplateWrapper implements AfterViewInit {
    @Input() public template: any = {};
    @Input() public model: Object = {};
    @Input() public stageName: string = null;
    @Input() public callback: Object = {};
    @ViewChild(TemplateProvider) public host: TemplateProvider;

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngAfterViewInit(): void {
        if (this.template) {
            this.loadComponent(this.template);
        }
    }

    public loadComponent(template): void {
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(template);
        let viewContainerRef = this.host.viewContainerRef;

        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<GridTemplate> componentRef.instance).data = this.model;
        (<GridTemplate> componentRef.instance).stageName = this.stageName;
        (<GridTemplate> componentRef.instance).callback = this.callback;
        this.cdRef.detectChanges();
    }
}
