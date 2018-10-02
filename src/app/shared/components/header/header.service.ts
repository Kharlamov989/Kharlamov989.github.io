
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable()
export class HeaderService {
    constructor(private http: HttpClient) { }

    logout() {
        return this.http.post('logout', {});
    }
}

