import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageModel } from '../model/message.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    message: MessageModel;
    subscription: Subscription;

    menuItems: any[] = [
        { label: 'Home', url: '/home' },
        { label: 'Subject + Subscription', url: '/subject-subscription' },
        { label: 'Search with delay', url: '/search-delay' },
        { label: 'Useful operators', url: '/operators' },
    ];

    constructor(
        private cartService: MessageService
    ) {
        const me = this;
        me.subscription = me.cartService
            .getMessage()
            .subscribe((message: MessageModel) => {
                me.message = message;
                console.log('subscribe from navigation component');
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        const me = this;
        me.subscription.unsubscribe();
    }
}
