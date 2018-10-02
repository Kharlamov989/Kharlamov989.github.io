import { Component, Input, OnInit } from '@angular/core';

import { TabService } from '../service';
import { AppState } from '../../../../app.service';

@Component({
    template: ''
})
export class TabsBaseComponent {
    @Input() public active: string;
    @Input() public data: any;
    public state: any;


    constructor(
        public dataService: TabService,
        public appState: AppState
    ) {
        this.state = this.appState.state;
    }
}
