import { Component, Input, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { HeaderService } from "./header.service";
import { StorageProvider } from "../../../core/storage-provider";
import { User } from "../../../modules/auth/user";



@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    host: {
        class: 'layout__block shrink',
        '(document:click)': 'onClick($event)'
    }
})
export class HeaderComponent {
    public activeTab: string;
    public isMenuNav: boolean = false;
    public isDropdownProject: boolean = false;
    public user: User;

    @ViewChild('dropdownNav') dropdownNav;
    @ViewChild('dropdownProject') dropdownProject;


    constructor(
        private router: Router,
        private headerService: HeaderService,
        private storageProvider: StorageProvider,
    ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.activeTab = val.urlAfterRedirects.split('/')[1];
            }
        });
    }

    public ngOnInit() {
        this.user = this.storageProvider.get('user');
    }

    public logout() {
        this.headerService.logout().subscribe(() => {
            this.router.navigate(['/login']);
            this.storageProvider.delete('user');
        })

    }

    private onClick() {
        if (this.dropdownNav && !this.dropdownNav.nativeElement.contains(event.target)) {
            this.isMenuNav = false;
        }

        if (this.dropdownProject && !this.dropdownProject.nativeElement.contains(event.target)) {
            this.isDropdownProject = false;
        }
    }
}