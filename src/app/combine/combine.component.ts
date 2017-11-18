import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-combine',
    templateUrl: './combine.component.html',
    styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit {

    result = -1;

    combined$: Observable<any>;
    subscription: Subscription;

    constructor() { }

    ngOnInit() {
        const me = this;

        const button = document.querySelector('#click-area');
        const click$ = Observable
            .fromEvent(button, 'click')
            .mapTo(1)
            .startWith(0)
            .scan((acc, curr) => acc + curr);
        const timer$ = Observable.timer(3000);

        me.combined$ = Observable.combineLatest(timer$, click$);
    }

    startGame() {
        const me = this;
        me.result = -1;
        me.subscription = me.combined$.subscribe(res => {
            me.result = res[1];
            console.log('You have clicked ' + me.result + ' time(s) in 3 sec');
            me.subscription.unsubscribe();
        });
    }
}
