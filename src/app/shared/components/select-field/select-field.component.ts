import { Component, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectFieldService } from './select-field.service';
import { AppState, InternalStateType } from '../../../app.service';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MySelectFieldComponent),
    multi: true
};

@Component({
    selector: 'my-select-field',
    template: `
        <select 
            [ngClass]="className || 'select'"
            [(ngModel)]="value"
            [compareWith]="byId"
        >
            <option [ngValue]="null">{{title ? title : 'Выберите значение'}}</option>
            <option [ngValue]="object" *ngFor="let object of dataSource">
                {{object.name}}
            </option>
        </select>
    `,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, SelectFieldService]
})
export class MySelectFieldComponent implements ControlValueAccessor, OnInit  {
    @Input() public className: string;
    @Input() public placeholder: string;
    @Input() public isDisabled: boolean;
    @Input() public type: string;
    @Input() public title: string;
    public state: InternalStateType;
    public dataSource: any[] = [];
    private innerValue: any = '';
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    constructor(
        public selectFieldService: SelectFieldService,
        public appState: AppState

    ) {
        this.state = this.appState.state;
    }

    public ngOnInit() {
        this.selectFieldService.get(this.type).subscribe((res) => {
            this.dataSource = res.results;
        });
    }

    public byId(innerItem, dictionaryItem) {
        return innerItem && dictionaryItem ? innerItem.id === dictionaryItem.id : innerItem === dictionaryItem;
      }

    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    public onBlur() {
        this.onTouchedCallback();
    }

    public writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
