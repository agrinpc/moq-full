"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GallerySchema = void 0;
const mongoose = require("mongoose");
exports.GallerySchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
});
//# sourceMappingURL=gallery.schema.js.map