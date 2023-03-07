"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
});
//# sourceMappingURL=categories.schema.js.map