import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AppState, InternalStateType } from '../../../../../app.service';

@Injectable()
export class FilterService {
    public state: InternalStateType;

    constructor(
        public appState: AppState
    ) {
        this.state = this.appState.state;
    }

    /**
     * Returns query string from filter params
     */
    public getFilterQuery(): string {
        let params = new URLSearchParams();

        for (let key in this.state.filter) {
            if (this.state.filter[key] !== null
                && this.state.filter[key] !== undefined
                && this.state.filter[key] !== '' ) {
                    if (key === 'is_repost' && this.state.filter[key] == '1') {
                        
                    } else {
                        params.set(key, this.state.filter[key]);
                    }
            }
        }

        return params.toString();
    }
}
