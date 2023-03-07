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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const toId = mongoose_2.default.Types.ObjectId;
let NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
        this.news = [];
    }
    async fetch() {
        this.news = await this.newsModel.find().populate({ path: 'labels', model: 'Label' }).populate({ path: 'thumb', model: 'Gallery' }).populate({ path: 'imgs', model: 'Gallery' }).exec();
        return (this.news);
    }
    async fetchById(idVal) {
        const res = await this.newsModel.findById(idVal);
        return (res);
    }
    async fetchByTag(ids) {
        const idArray = ids.split(",");
        this.news = await this.newsModel.find({ labels: { $in: idArray } }).populate({ path: 'thumb', model: 'Gallery' }).populate({ path: 'labels', model: 'Label' }).populate({ path: 'imgs', model: 'Gallery' }).exec();
        return (this.news);
    }
    async add(data) {
        let date = new Date();
        data.date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        const newNews = new this.newsModel(data);
        const res = await newNews.save();
        return (res);
    }
    async update(data) {
        const res = await this.newsModel.findByIdAndUpdate(data.id, { title: data.title, text: data.text, desc: data.desc, headline: data.headline });
        return (res);
    }
    async updateThumb(data) {
        const res = await this.newsModel.findByIdAndUpdate(data.id, { thumb: new toId(data.imgId) });
        return (res);
    }
    async addImg(id, imgId) {
        const res = await this.newsModel.findByIdAndUpdate(id, { $push: { imgs: { _id: new toId(imgId) } } });
        return (res);
    }
    async removeImg(id, imgId) {
        const res = await this.newsModel.findByIdAndUpdate(id, { $pullAll: { imgs: [{ _id: imgId }] } });
        return (res);
    }
    async addLabel(id, lbl) {
        const res = await this.newsModel.findByIdAndUpdate(id, { $push: { labels: { _id: new toId(lbl) } } });
        return (res);
    }
    async removeLbl(id, lblId) {
        const res = await this.newsModel.findByIdAndUpdate(id, { $pullAll: { labels: [{ _id: lblId }] } });
        return (res);
    }
    async remove(idVal) {
        await this.newsModel.deleteOne({ _id: idVal });
    }
};
NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('News')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map