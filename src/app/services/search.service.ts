import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cities } from '../data/cities';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class SearchService {

    private delaySearchTime = 350;
    private dataUrl = 'https://wiki.skullsecurity.org/images/5/54/US_Cities.txt';

    constructor(
        private httpClient: HttpClient
    ) { }

    search(texts: Observable<string>): any {
        const me = this;
        return texts
            .debounceTime(me.delaySearchTime)
            .distinctUntilChanged()
            .switchMap(text => me.searchRecords(text));
    }

    searchRecords(text: string): Observable<string[]> {
        const me = this;
        const textUpperCase = text.toLocaleUpperCase();
        return me
            .getCitiesNames()
            .map(cities => cities.filter((city: string) => city.toLocaleUpperCase().includes(textUpperCase)));
    }

    private getCitiesNames(): Observable<string[]> {
        return Observable.create((observer: Subscriber<any>) => {
            observer.next(Cities);
            observer.complete();
        });
    }
}
