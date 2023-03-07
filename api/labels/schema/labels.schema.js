"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelSchema = void 0;
const mongoose = require("mongoose");
exports.LabelSchema = new mongoose.Schema({
    title: { type: String, required: true }
});
//# sourceMappingURL=labels.schema.js.map