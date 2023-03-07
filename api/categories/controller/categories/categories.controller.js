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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../../auth/guards/jwt.guard");
const categories_dto_1 = require("../../dto/categories.dto");
const categories_service_1 = require("../../service/categories/categories.service");
let CategoriesController = class CategoriesController {
    constructor(srv) {
        this.srv = srv;
    }
    async getLabels() {
        const res = await this.srv.fetch();
        return (res.map(cat => ({ id: cat.id, title: cat.title, text: cat.text })));
    }
    async getLabelsSingle(id) {
        let res;
        try {
            res = await this.srv.fetchById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('error');
        }
        return ({ id: res.id, title: res.title, text: res.text });
    }
    async createLabel(data) {
        const res = await this.srv.add(data);
        if (res)
            return ({ res: 1, msg: 'success' });
        return ({ res: 0, msg: 'failure' });
    }
    async updateLabel(data) {
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
], CategoriesController.prototype, "getLabels", null);
__decorate([
    (0, common_1.Get)('fetch/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getLabelsSingle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_dto_1.AddCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createLabel", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateLabel", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('del/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteLabel", null);
CategoriesController = __decorate([
    (0, common_1.Controller)('api/categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map