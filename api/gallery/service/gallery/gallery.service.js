"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let GalleryService = class GalleryService {
    constructor(galleryModel) {
        this.galleryModel = galleryModel;
        this.images = [];
    }
    async fetch() {
        this.images = await this.galleryModel.find().exec();
        return (this.images);
    }
    async fetchById(idVal) {
        const res = await this.galleryModel.findById(idVal);
        return (res);
    }
    async add(data) {
        const newGallery = new this.galleryModel(data);
        const res = await newGallery.save();
        return (res);
    }
    async update(data) {
        const res = await this.galleryModel.findByIdAndUpdate(data.id, { title: data.title });
        return (res);
    }
    async upload(data) {
        const res = await this.galleryModel.findByIdAndUpdate(data.id, { url: data.url });
        return (res);
    }
    async fetchImage(id) {
        const res = await this.fetchById(id);
        return res.url;
    }
    async remove(idVal) {
        await this.galleryModel.deleteOne({ _id: idVal });
    }
};
GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Gallery')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GalleryService);
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.service.js.map