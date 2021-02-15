"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    // _id: String,
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
    },
    tokenVersion: {
        type: Number,
        default: 0,
    },
    verifiedEmail: {
        type: Boolean,
        default: false,
    },
}, { _id: true, timestamps: true });
exports.User = mongoose_1.model('users', UserSchema);
//# sourceMappingURL=index.js.map