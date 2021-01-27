"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        trim: true,
    },
}, { _id: true, timestamps: true, collection: 'users' });
exports.User = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=index.js.map