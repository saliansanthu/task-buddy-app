import mongoose from 'mongoose';
import { pageSchema } from './Page.js';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    createdAt: { type: Date, default: new Date().toISOString() },
    isEmailVerified: { type: Boolean, default: false },
    password: { type: String, required: true },
    pages: { type: [ pageSchema ], default: [] }
});

export default mongoose.model('User', userSchema);