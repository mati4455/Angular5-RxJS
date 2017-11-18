import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-search-delay',
    templateUrl: './search-delay.component.html',
    styleUrls: ['./search-delay.component.scss']
})
export class SearchDelayComponent implements OnInit, OnDestroy {

    results: string[];

    searchText$ = new Subject<string>();
    searchSubscription: Subscription;

    constructor(
        private searchService: SearchService
    ) {
        const me = this;
        me.searchSubscription = me.searchService
            .search(me.searchText$)
            .subscribe(results => {
                me.results = results;
                console.log('search results recived');
            });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        const me = this;
        me.searchSubscription.unsubscribe();
    }

}
