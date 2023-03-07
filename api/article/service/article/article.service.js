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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const toId = mongoose_2.default.Types.ObjectId;
let ArticleService = class ArticleService {
    constructor(articleModel) {
        this.articleModel = articleModel;
        this.articles = [];
    }
    async fetch() {
        this.articles = await this.articleModel.find().populate({ path: 'labels', model: 'Label' }).populate({ path: 'imgs', model: 'Gallery' }).exec();
        return (this.articles);
    }
    async fetchByCat(ids) {
        this.articles = await this.articleModel.find({ 'cat': ids }).populate({ path: 'cat', model: 'Category' }).populate({ path: 'labels', model: 'Label' }).populate({ path: 'imgs', model: 'Gallery' }).exec();
        return (this.articles);
    }
    async fetchById(idVal) {
        const res = await this.articleModel.findById(idVal).populate({ path: 'labels', model: 'Label' }).populate({ path: 'imgs', model: 'Gallery' }).exec();
        return (res);
    }
    async add(data) {
        let date = new Date();
        data.date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        const newGallery = new this.articleModel(data);
        const res = await newGallery.save();
        return (res);
    }
    async update(data) {
        const res = await this.articleModel.findByIdAndUpdate(data.id, { title: data.title, text: data.text, desc: data.desc, cat: data.cat });
        return (res);
    }
    async addImg(id, imgId) {
        const res = await this.articleModel.findByIdAndUpdate(id, { $push: { imgs: { _id: new toId(imgId) } } });
        return (res);
    }
    async removeImg(id, imgId) {
        const res = await this.articleModel.findByIdAndUpdate(id, { $pullAll: { imgs: [{ _id: imgId }] } });
        return (res);
    }
    async addLabel(id, lbl) {
        const res = await this.articleModel.findByIdAndUpdate(id, { $push: { labels: { _id: new toId(lbl) } } });
        return (res);
    }
    async removeLbl(id, lblId) {
        const res = await this.articleModel.findByIdAndUpdate(id, { $pullAll: { labels: [{ _id: lblId }] } });
        return (res);
    }
    async remove(idVal) {
        await this.articleModel.deleteOne({ _id: idVal });
    }
};
ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Article')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map