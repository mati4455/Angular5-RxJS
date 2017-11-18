import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-operators',
    templateUrl: './operators.component.html',
    styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit, OnDestroy {

    sum: number;
    private subject$ = new Subject<number>();
    private subscription: Subscription;

    obj: Object;
    private subjectObject$ = new Subject<Object>();
    private subscriptionObject: Subscription;

    ngOnInit() {
        const me = this;
        me.subscription = me.getSubscription();
        me.subscriptionObject = me.getObjectSubscription();
    }

    ngOnDestroy(): void {
        const me = this;
        me.subscription.unsubscribe();
        me.subscriptionObject.unsubscribe();
    }

    /** sum numbers **/
    addNumber(number: number): void {
        const me = this;
        me.subject$.next(+number);
    }

    clearSum(): void {
        const me = this;
        me.subscription.unsubscribe();
        me.subscription = me.getSubscription();
    }

    getSubscription(): Subscription {
        const me = this;
        return me.subscription = me.subject$
            .startWith(0)
            .scan((sum: number, curr: number) => sum + curr)
            .subscribe(sum => {
                console.log(sum);
                me.sum = sum;
            });
    }
    /** end of sum **/

    /** dynamic building object **/

    addProperty(name: string, value: any): void {
        const me = this;
        me.subjectObject$.next({
            [name]: value
        });
    }

    clearObject(): void {
        const me = this;
        me.subscriptionObject.unsubscribe();
        me.subscriptionObject = me.getObjectSubscription();
    }

    getObjectSubscription(): Subscription {
        const me = this;
        return me.subscription = me.subjectObject$
            .startWith({})
            .scan((obj: Object, property: any) => Object.assign(obj, property))
            .subscribe(obj => {
                me.obj = obj;
            });
    }

    /** end of building object **/
}
