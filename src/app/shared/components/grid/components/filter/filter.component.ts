import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppState, InternalStateType } from '../../../../../app.service';
import { FilterDataService } from './filter.data.service';
import { FilterService } from './filter.service';
import { DataService } from '../../services';
import { Data } from '../../models';
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
// TO-DO продумать механизм фильтрации по умолчанию
@Component({
    selector: 'filter',
    templateUrl: './filter.component.html',
    host: { class: 'layout__block shrink' }

})
export class FilterComponent implements OnInit, OnDestroy {
    @Input() public options: any;
    @Input() public data: Data = new Data();
    @Input() public url: string;
    @Input() public isPending: { state: boolean } = { state: false };
    public state: InternalStateType;
    public isFilter: boolean = true;

    constructor(
        public appState: AppState,
        public filterDataService: FilterDataService,
        public filterService: FilterService,
        public dataService: DataService
    ) {
        this.state = this.appState.state;
    }

    /**
     * Initialize filter with options fields and get filter fields
     */
    public ngOnInit(): void {
        if (!this.state.filter) {
            this.state.filter = {}
        }

        for (let key in this.options) {
            if (this.state.filter.hasOwnProperty(key)) {
                this.state.filter[key] = '';
            } else {
                this.state.filter[key] = '';
            }
        }

        console.log(this.state.filter)


        if (this.options) {
            this.filterDataService.getFilterFields();
        }
    }

    public ngOnDestroy(): void {
        this.options = {};
        this.state.filter = {};
    }

    public filter(): void {
        let filters = this.filterService.getFilterQuery();
        this.isPending.state = true;

        this.dataService.get(this.url, filters).subscribe((res) => {
            this.data.response = res;
            this.isPending.state = false;
        },
            (err) => {
                this.isPending.state = false;
                this.data = new Data();
            });
    }

    public onKeySearch(event: any) {
        if (event.keyCode === 13) {
            this.filter();
        }
    }

    public clear(): void {
        for (let key in this.state.filter) {
            if (this.state.filter.hasOwnProperty(key)) {
                this.state.filter[key] = '';
            }
        }
        this.filter();
    }

    public toggleFilter(): void {
        this.isFilter = !this.isFilter;
    }
}
