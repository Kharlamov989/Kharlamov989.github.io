import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    SimpleChanges,
    OnDestroy
} from '@angular/core';
import { DataService } from '../../services';
import { Data } from '../../models';
import { Utils } from '../../utils';
import { AppState, InternalStateType } from '../../../../../app.service';
import { FilterService } from '../filter';
import { Organization } from '../../../../../models/organization';
import { StorageProvider } from '../../../../../core/storage-provider';

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    host: { class: 'layout__block' },
    providers: [DataService]
})

export class GridComponent implements OnInit, OnChanges {
    @Input() public filters: any;
    @Input() public url: string;
    @Input() public columns: any[] = [];
    @Input() public list: any[];
    // TO-DO продумать механизм фильтрации по умолчанию
    @Input() public defaultFilter: string;
    @Input() public hidePagination: boolean;
    @Input() public selectedRow: any[] = [];
    @Input() public isFilter: boolean = false;
    @Output() public isPending: { state: boolean } = { state: false };
    public data: Data = new Data();
    public searchText: string = '';
    public selectAllState: boolean = false;
    public state: InternalStateType;

    constructor(
        private dataService: DataService,
        private utils: Utils,
        public appState: AppState,
        public filterService: FilterService,
        private storageProvider: StorageProvider

    ) {
        this.state = this.appState.state;
    }

    public ngOnInit(): void {
        if (!this.url) {
            this.data.response.results = this.list;
        } else if (this.url) {
            let currentFilter: any = this.getFilter();
            let filter: any = currentFilter || this.defaultFilter;

            this.get(filter);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.list && changes.list.currentValue) {
            this.data.response.results = changes.list.currentValue;
        } else if (changes.url && changes.url.currentValue) {
            this.url = changes.url.currentValue;
            let currentFilter: any = this.getFilter();
            let filter: any = currentFilter || this.defaultFilter;

            this.get(filter);
        }
    }

    // впадлу было заморачиваться, отрефакторить логику работы с чекбоксами
    public isCheckedAll(columnOptions: any) {
        let isChecked: boolean = this.selectedRow.length === 0 ? false : true;

        this.data.response.results
            .map((e) => {
                let index = this.selectedRow.indexOf(e.id, 0);

                if (columnOptions.isShow) {
                    if (index === -1 && columnOptions.isShow(e)) {
                        isChecked = false;
                    } else if (index !== -1 && !columnOptions.isShow(e)) {
                        isChecked = false;
                    }
                } else if (index === -1) {
                    isChecked = false;
                }
            });

        this.selectAllState = isChecked;

        return this.selectAllState;
    }

    public toggleFilter(): void {
        this.isFilter = !this.isFilter;
    }

    public selectAll(selectAllState: boolean, columnOptions: any): void {
        this.selectAllState = !selectAllState;

        this.data.response.results
            .map((e) => {
                let index = this.selectedRow.indexOf(e.id, 0);
                if (this.selectAllState) {
                    if (columnOptions.isShow && index === -1) {
                        if (columnOptions.isShow(e)) {
                            this.selectedRow.push(e.id);
                        }
                    } else {
                        if (index === -1) {
                            this.selectedRow.push(e.id);
                        }
                    }
                } else {
                    if (index > -1) {
                        this.selectedRow.splice(index, 1);
                    }
                }
            });
    }

    public isChecked(id: number): boolean {
        return this.utils.contains(this.selectedRow, id);
    }

    public onCheck(id: number): void {
        let index: number = this.selectedRow.indexOf(id);
        this.selectAllState = false;

        if (index !== -1) {
            this.selectedRow.splice(index, 1);
        } else {
            this.selectedRow.push(id);
        }
    }

    public getFilter(): string {

        return null;

    }

    public refresh(): void {
        this.dataService.get(this.url).subscribe((res) => {
            this.data.response = res;
        });
    }

    // To-do сделать маппинг индекса сортировки
    public sort(sort: string, propName: string): string {
        this.isPending.state = true;
        this.dataService.sort(this.url, sort, propName, this.getFilter(), this.data.response.pagenum)
            .subscribe((res) => {
                this.data.response = res;
                this.isPending.state = false;
            },
                (err) => {
                    this.isPending.state = false;
                    this.data = new Data();
                });

        return sort === 'desc' ? 'asc' : 'desc';
    }

    public getProps(item: any, path: string, type: any): string {
        return this.utils.getValueByPath(item, path, type);
    }

    public onKeySearch(event: any) {
        let organizations: Organization[] = this.storageProvider.get('organizations');
        organizations = organizations ? organizations : []
        
        if (event.keyCode === 13) {
            let newOrg = organizations.filter((e) => {
                if(e.name.includes(this.searchText) || e.decription.includes(this.searchText) || e.address.includes(this.searchText)) {
                    return e;
                }
            })
            console.log(newOrg)
            this.data.response.results = newOrg;
        }
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

    private get(filters?: string): void {
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
}
