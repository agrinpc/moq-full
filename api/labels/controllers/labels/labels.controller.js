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
exports.LabelsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const jwt_guard_1 = require("../../../auth/guards/jwt.guard");
const addlabel_dto_1 = require("../../dto/addlabel.dto");
const labels_service_1 = require("../../services/labels/labels.service");
let LabelsController = class LabelsController {
    constructor(srv) {
        this.srv = srv;
    }
    async getLabels() {
        const res = await this.srv.fetchLabels();
        return (res.map(lab => ({ id: lab.id, title: lab.title })));
    }
    async getLabelsSingle(id) {
        let res;
        try {
            res = await this.srv.fetchLabelById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('error');
        }
        return ({ id: res.id, title: res.title });
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
], LabelsController.prototype, "getLabels", null);
__decorate([
    (0, common_1.Get)('fetch/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LabelsController.prototype, "getLabelsSingle", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('add'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addlabel_dto_1.AddLabelDto]),
    __metadata("design:returntype", Promise)
], LabelsController.prototype, "createLabel", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, decorators_1.Patch)('update'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addlabel_dto_1.CreatLabelDto]),
    __metadata("design:returntype", Promise)
], LabelsController.prototype, "updateLabel", null);
__decorate([
    (0, decorators_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, decorators_1.Delete)('del/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LabelsController.prototype, "deleteLabel", null);
LabelsController = __decorate([
    (0, common_1.Controller)('api/labels'),
    __metadata("design:paramtypes", [labels_service_1.LabelsService])
], LabelsController);
exports.LabelsController = LabelsController;
//# sourceMappingURL=labels.controller.js.map