import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services';
import { Data } from '../../models';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',

})
export class PaginationComponent implements OnInit {
    @Input() public url: string;
    @Input() public data: Data = new Data();
    @Input() public selectedRow: any[] = [];
    @Input() public isPending: {state: boolean} = {state: false};
    private defaultCountOnPage: number = 10;

    constructor(
        public dataService: DataService
    ) { }

    public ngOnInit(): void {
        this.dataService.setCountOnPage(this.defaultCountOnPage);
    }

    public pageCountChange(e) {
        this.dataService.setCountOnPage(e);
        this.reload();
    }

    /**
     * Get first page
     */
    public first(): void {
       
        this.isPending.state = true;

        this.dataService.first(this.url, '').subscribe((res) => {
            this.data.response = res;
            this.isPending.state = false;
        },
        (err) => {
            this.isPending.state = false;
            this.data = new Data();
        });
    }

    /**
     * Get previous page
     */
    public prev(): void {
        this.isPending.state = true;

        if (this.data.response.previous_page_number) {
            this.dataService.prev(this.url, this.data.response.previous_page_number, '').subscribe((res) => {
                this.data.response = res;
                this.isPending.state = false;
            },
            (err) => {
                this.isPending.state = false;
                this.data = new Data();
            });
        }
    }

    /**
     * Get next page
     */
    public next(): void {
        this.isPending.state = true;

        if (this.data.response.next_page_number) {
            this.dataService.next(this.url, this.data.response.next_page_number, '').subscribe((res) => {
                this.data.response = res;
                this.isPending.state = false;
            },
            (err) => {
                this.isPending.state = false;
                this.data = new Data();
            });
        }
    }

    /**
     * Get next page
     */
    public last(): void {
        this.isPending.state = true;

        if (this.data.response.num_pages) {
            this.dataService.next(this.url, this.data.response.num_pages, '').subscribe((res) => {
                this.data.response = res;
                this.isPending.state = false;
            },
            (err) => {
                this.isPending.state = false;
                this.data = new Data();
            });
        }
    }

    /**
     * Realod current page
     */
    public reload(): void {
        this.isPending.state = true;

        this.dataService.reload(this.url, '').subscribe((res) => {
            this.data.response = res;
            this.isPending.state = false;
            this.selectedRow.splice(0, this.selectedRow.length);
        },
        (err) => {
            this.isPending.state = false;
            this.data = new Data();
            this.selectedRow.splice(0, this.selectedRow.length);
        });
    }
}
