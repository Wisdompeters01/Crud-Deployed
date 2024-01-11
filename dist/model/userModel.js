"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    companyName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    staff: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "staffs",
        },
    ],
    project: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "projects",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userModel);
