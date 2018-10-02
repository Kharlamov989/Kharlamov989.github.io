import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
    public countOnPage: number = 10;
    constructor(
        public http: HttpClient
    ) { }

    public setCountOnPage(count) {
        this.countOnPage = count;
    }

    public get(url: string, filters?: string, page?: any): Observable<any> {
        return this.http.get(`${url}${this.generetaUrlParams(filters, page)}`)
            .pipe(
                map((r: any) => {
                    if (r.results.length === 0) {
                        r.notFound = true;
                    }
                    return r;
                }
            )
        );
    }

    public first(url: string, filter: string): Observable<any> {
        return this.get(url, filter, 1);
    }

    public prev(url: string, prevPage: number, filter: string): Observable<any> {
        return this.get(url, filter, prevPage);
    }

    public next(url: string, nextPage, filter: string): Observable<any> {
        return this.get(url, filter, nextPage);
    }

    public reload(url: string, filter: string): Observable<any> {
        return this.get(url, filter);
    }

    // To-do сделать маппинг индекса сортировки
    public sort(url: string, sort: string, propName: string, filters?: string, page?: any): any {
        let index: string = sort === 'desc' ? '' : '-';

        return this.http.get(`${url}${this.generetaUrlParams(filters, page)}&ordering=${index}${propName}`)
            .pipe((response) => {
                return response;
            });
    }

    private generetaUrlParams(filter: string, page: number): string {
        let urlParam: any = `?page_size=${this.countOnPage}&`;

        if (filter) {
            urlParam = urlParam + filter;

            urlParam = page ? urlParam + '&' : urlParam;
        }

        if (page) {
            urlParam = urlParam + `page=${page}`;
        }

        return urlParam;
    }
}
