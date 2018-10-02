import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { PostsTemplate, AccountsComponent, ParticipantInfoComponent } from '../../../../shared/components/grid/templates';
import { ModalBaseComponent } from '../../../../shared/components/modal/modal.base.component';
import { MainService } from '../../main.service';
import { Subject } from 'rxjs';


@Component({
    selector: 'repost-modal',
    templateUrl: './repost-modal.component.html'
})

export class RepostModalComponent extends ModalBaseComponent implements OnInit {
    @Input() public repostSubject: Subject<any> = new Subject<any>()
    public account: any;
    public postsUrl = '';


    public feedColumns: any[] = [
        { template: PostsTemplate }
    ];

    constructor(
        public identificationService: MainService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.repostSubject.asObservable().subscribe(e => {
            this.postsUrl = `entities/facebook/posts/${e.crw_id}/reposts/`
        });
    }

    public close() {
        this.modalState.isOpen = false;
    }
}
