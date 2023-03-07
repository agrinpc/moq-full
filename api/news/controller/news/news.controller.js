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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../../auth/guards/jwt.guard");
const news_dto_1 = require("../../dto/news.dto");
const news_service_1 = require("../../service/news/news.service");
let NewsController = class NewsController {
    constructor(srv) {
        this.srv = srv;
    }
    async get() {
        const res = await this.srv.fetch();
        return (res.map(art => ({ id: art.id, title: art.title, headline: art.headline, text: art.text,
            desc: art.desc, imgs: art.imgs, labels: art.labels, thumb: art.thumb, date: art.date })));
    }
    async getByTag(ids) {
        const res = await this.srv.fetchByTag(ids);
        return (res.map(art => ({ id: art.id, title: art.title, headline: art.headline, text: art.text,
            desc: art.desc, imgs: art.imgs, labels: art.labels, thumb: art.thumb, date: art.date })));
    }
    async getSingle(id) {
        let res;
        try {
            res = await this.srv.fetchById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('error');
        }
        return ({ id: res.id, title: res.title, headline: res.headline, text: res.text,
            desc: res.desc, imgs: res.imgs, labels: res.labels, thumb: res.thumb, date: res.date });
    }
    async create(data) {
        const res = await this.srv.add(data);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async addImg(data) {
        const res = await this.srv.addImg(data.id, data.img);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async removeImg(data) {
        const res = await this.srv.removeImg(data.id, data.imgId);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async addLbl(data) {
        const res = await this.srv.addLabel(data.id, data.lbl);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async removeLbl(data) {
        const res = await this.srv.removeLbl(data.id, data.lblId);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async update(data) {
        const res = await this.srv.update(data);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async updateThumb(data) {
        const res = await this.srv.updateThumb(data);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async deleteLabel(id) {
        await this.srv.remove(id);
    }
};
__decorate([
    (0, common_1.Get)('fetch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('fetch/tag/:ids'),
    __param(0, (0, common_1.Param)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getByTag", null);
__decorate([
    (0, common_1.Get)('fetch/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getSingle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_1.AddNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('addimg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "addImg", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('removeimg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "removeImg", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('addlbl'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "addLbl", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('removelbl'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "removeLbl", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_1.UpdateNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('updatethumb'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_1.UpdateNewsThumbDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "updateThumb", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('del/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "deleteLabel", null);
NewsController = __decorate([
    (0, common_1.Controller)('api/news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
exports.NewsController = NewsController;
//# sourceMappingURL=news.controller.js.map