import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable ,  of } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { User } from './user';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
      ) { }

    canActivate(): boolean {
        const user: any = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
