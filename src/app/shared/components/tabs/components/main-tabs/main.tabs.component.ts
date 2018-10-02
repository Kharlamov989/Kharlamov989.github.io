import { Component, OnInit } from '@angular/core';
import { TabsBaseComponent } from '../tabs.base.component';

@Component({
    selector: 'main-tabs',
    templateUrl: './main.tabs.component.html'
})
export class MainTabsComponent extends TabsBaseComponent implements OnInit {
    public ngOnInit(): void {
        this.getCounters();
    }

    getCounters(): void {
        this.dataService.get('tasks/scrolling_new/count').subscribe((e) => {
            this.state.new = e;
        });
        this.dataService.get('tasks/scrolling_in_precess/count').subscribe((e) => {
            this.state.inProcess = e;
        });
        this.dataService.get('tasks/scrolling_done/count').subscribe((e) => {
            this.state.ready = e;
        });
    }
}
