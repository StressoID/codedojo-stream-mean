import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    message: String,
    nickname: String,
    created: {
        type: Date,
        default: Date.now()
    }
});