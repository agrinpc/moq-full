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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_dto_1 = require("../../dto/article.dto");
const article_service_1 = require("../../service/article/article.service");
const jwt_guard_1 = require("../../../auth/guards/jwt.guard");
let ArticleController = class ArticleController {
    constructor(srv) {
        this.srv = srv;
    }
    async get() {
        const res = await this.srv.fetch();
        return (res.map(art => ({ id: art.id, title: art.title, text: art.text, desc: art.desc, imgs: art.imgs, labels: art.labels, cat: art.cat, date: art.date })));
    }
    async getByCat(ids) {
        const res = await this.srv.fetchByCat(ids);
        return (res.map(art => ({ id: art.id, title: art.title, text: art.text, desc: art.desc, imgs: art.imgs, labels: art.labels, cat: art.cat, date: art.date })));
    }
    async getSingle(id) {
        let res;
        try {
            res = await this.srv.fetchById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('error');
        }
        return ({ id: res.id, title: res.title, text: res.text, desc: res.desc, imgs: res.imgs, labels: res.labels, cat: res.cat, date: res.date });
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
    async deleteLabel(id) {
        await this.srv.remove(id);
    }
};
__decorate([
    (0, common_1.Get)('fetch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('fetch/cat/:ids'),
    __param(0, (0, common_1.Param)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getByCat", null);
__decorate([
    (0, common_1.Get)('fetch/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getSingle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.AddArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('addimg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addImg", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('removeimg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "removeImg", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('addlbl'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "addLbl", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('removelbl'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "removeLbl", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('del/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteLabel", null);
ArticleController = __decorate([
    (0, common_1.Controller)('api/article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map