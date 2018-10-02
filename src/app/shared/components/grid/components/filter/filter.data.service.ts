import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState, InternalStateType } from '../../../../../app.service';

// TO-DO переписать
@Injectable()
export class FilterDataService {
    public state: InternalStateType;

    constructor(
        public appState: AppState,
        public http: HttpClient
    ) {
        this.state = this.appState.state;
    }

    public getFilterFields() {
        this.state.filterData = {};
        this.getLabels();
        this.getBots();
        this.getUsers();
    }


    public getLabels(): void {
        if (!this.state.filterData.statuses) {
            this.http.get('/labels')
                .subscribe((labels: any) => {
                    this.state.filterData.labels = labels.results;
                });
        }
    }

    public getBots(): void {
        if (!this.state.filterData.bots) {
            this.http.get('/telegram/bots?page_size=100')
                .subscribe((bots: any) => {
                    this.state.filterData.bots = bots.results;
                });
        }
    }

    public getUsers(): void {
        if (!this.state.filterData.users) {
            this.http.get('/users')
                .subscribe((users: any) => {
                    this.state.filterData.users = users.results;
                });
        }
    }
}
