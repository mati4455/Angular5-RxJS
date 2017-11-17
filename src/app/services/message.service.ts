import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { MessageModel } from '../model/message.model';

@Injectable()
export class MessageService {
    private subject = new Subject<MessageModel>();

    sendMessage(message: string): void {
        const me = this;
        me.subject.next({
            message: message,
            status: 200
        });
    }

    clearMessage(): void {
        const me = this;
        me.subject.next();
    }

    getMessage(): Observable<MessageModel> {
        const me = this;
        return me.subject.asObservable();
    }
}
