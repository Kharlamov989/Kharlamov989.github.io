import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { StorageProvider } from '../../core/storage-provider';


@Component({
    selector: 'auth-page',
    templateUrl: 'auth.component.html',
    host: { class: 'layout__block' }
})

export class AuthComponent {
    public error: boolean;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService,
        private storageProvider: StorageProvider
    ) { }

    loginForm = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required],
    });

    submit() {
        if (this.loginForm.valid) {
            this.error = false;

            if (this.loginForm.value.email === 'denge989@yandex.ru' && this.loginForm.value.password === '123456') {
                this.router.navigate(['/']);
                this.storageProvider.set('user', {name: this.loginForm.value.email});
            } else { 
                this.error = true;
            }
        } else {
            this.error = true;
        }
    }
}
