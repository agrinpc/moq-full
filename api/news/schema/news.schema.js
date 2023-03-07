"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSchema = void 0;
const mongoose = require("mongoose");
exports.NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    desc: { type: String, required: true },
    headline: { type: String, required: true },
    date: { type: String, required: false },
    thumb: { type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: false },
    imgs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: false }],
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Label", required: false }],
});
//# sourceMappingURL=news.schema.js.map