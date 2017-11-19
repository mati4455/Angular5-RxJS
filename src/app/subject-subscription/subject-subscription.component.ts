import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../model/message.model';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../services/message.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-subject-subscription',
    templateUrl: './subject-subscription.component.html',
    styleUrls: ['./subject-subscription.component.scss']
})
export class SubjectSubscriptionComponent implements OnInit, OnDestroy {
    message: MessageModel;
    subscription: Subscription;

    constructor(
        private messageService: MessageService
    ) {
        const me = this;
        me.subscription = me.messageService
            .getMessage()
            .subscribe((message: MessageModel) => {
                me.message = message;
                console.log('subscribe from subject-subscription component');
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        const me = this;
        me.subscription.unsubscribe();
    }

    sendMessage(message: string): void {
        const me = this;
        me.messageService.sendMessage(message);
    }

    clearMessage(): void {
        const me = this;
        me.messageService.clearMessage();
    }
}
