import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CustomHttpParams } from '../../../core/custom-http-params';

@Injectable()
export class SelectFieldService {
    constructor(private http: HttpClient) { }

    public get(url: string): Observable<any> {
        return this.http.get(`/${url}`, {
            params: new CustomHttpParams(true)
        }).pipe(
            map((response: Response) => {
                return response;
            })
        );
    }
}
