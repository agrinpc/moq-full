"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose = require("mongoose");
exports.ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: String, required: false },
    cat: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: false },
    imgs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gallery", required: false }],
    labels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Label", required: false }],
});
//# sourceMappingURL=article.schema.js.map