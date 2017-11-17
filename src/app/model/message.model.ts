export class MessageModel {
    message: string;
    status: number;

    constructor(
        message: string,
        status: number
    ) {
        const me = this;
        me.message = message;
        me.status = status;
    }
}
