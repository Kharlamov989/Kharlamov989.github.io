import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User, Authenticate } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login({ email, password }: Authenticate): Observable<User> {
        return this.http.post<User>('login', {email, password, audience: 'WEB', product: 'SCRL'})
    }

    logout() {
        return this.http.get('logout');
    }
}
