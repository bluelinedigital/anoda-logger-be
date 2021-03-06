export class PublicLogOutDto {
    _id: string;
    context: string;
    message: string;
    traceId: string;
    timestamp: Date;
    env: string;

    constructor (init) {
        this._id = init._id || null;
        this.context = init.context || null;
        this.message = init.message || null;
        this.traceId = init.traceId || null;
        this.timestamp = init.timestamp || null;
        this.env = init.env || null;
    }
}
