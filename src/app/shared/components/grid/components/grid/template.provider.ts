import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[template-provider]',
})
export class TemplateProvider {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
