import { Schema }  from 'mongoose';

export const LoggerSchema = new Schema({
    context:   String,
    traceId:   { type: String, index: 1 },
    message:   String,
    timestamp: { type: Date, index: 1 },
}, {
    versionKey: false,
    timestamps: false,
});
