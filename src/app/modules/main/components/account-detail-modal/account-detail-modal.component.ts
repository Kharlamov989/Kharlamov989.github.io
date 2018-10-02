import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { PostsTemplate, AccountsComponent, ParticipantInfoComponent, RepostComponent } from '../../../../shared/components/grid/templates';
import { ModalBaseComponent } from '../../../../shared/components/modal/modal.base.component';
import { MainService } from '../../main.service';
import { Subject } from 'rxjs';
import { ModalState } from '../../../../shared/components/modal/model/modal-state';
import { CrawlerInfo } from '../../../../models/crawlerInfo';


@Component({
    selector: 'account-detail-modal',
    templateUrl: './account-detail-modal.component.html'
})

export class AccountDetailModalComponent extends ModalBaseComponent implements OnInit {
    @Input() public accountSubject: Subject<any> = new Subject<any>()
    @Input() public repostSubject: Subject<any> = new Subject<any>()
    @Input() public repostModalState: ModalState = new ModalState(false);
    @Input() public platform: string = 'telegram';
    public account: any;
    public activeTab: string = 'account';
    public postsUrl = '';
    public friendUrl = '';
    public accountInfo: CrawlerInfo = new CrawlerInfo();

    public feedColumns: any[] = [
        { template: PostsTemplate },
        { template: RepostComponent, callback: { showReposts: this.openRepostModal.bind(this) } }
    ];

    public accountColumns: any[] = [
        { template: ParticipantInfoComponent }
    ];

    constructor(
        public identificationService: MainService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.accountSubject.asObservable().subscribe(e => {
            this.account = e;
            this.postsUrl = `entities/${e.task_type.platform.code}/accounts/${e.entity_id}/posts/`
            this.friendUrl = `entities/${e.task_type.platform.code}/accounts/${e.entity_id}/friends/`
            this.identificationService.getAccountDetail(e.entity_id, e.task_type.platform.code).subscribe((e) => {
                this.accountInfo = new CrawlerInfo(e);
            })
        });
    }

    public openRepostModal(data): void {
        this.repostSubject.next(data);
        this.repostModalState = { isOpen: true };
    }

    public close() {
        this.modalState.isOpen = false;
        this.activeTab = 'account';
        this.accountInfo = new CrawlerInfo();;
    }
}
