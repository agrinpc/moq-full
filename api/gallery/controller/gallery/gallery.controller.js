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
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const jwt_guard_1 = require("../../../auth/guards/jwt.guard");
const gallery_dto_1 = require("../../dto/gallery.dto");
const image_helper_1 = require("../../helpers/image.helper");
const gallery_service_1 = require("../../service/gallery/gallery.service");
let GalleryController = class GalleryController {
    constructor(srv) {
        this.srv = srv;
    }
    async getImages() {
        const res = await this.srv.fetch();
        return (res.map(img => ({ id: img.id, title: img.title, url: img.url })));
    }
    async getSingle(id) {
        let res;
        try {
            res = await this.srv.fetchById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('error');
        }
        return ({ id: res.id, title: res.title, url: res.url });
    }
    async create(data) {
        const res = await this.srv.add(data);
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
    async upload(data, file, req) {
        const fileName = file === null || file === void 0 ? void 0 : file.filename;
        if (!fileName)
            return ({ res: 0, msg: 'failure' });
        const pre = await this.getSingle(data.id);
        const dir = (0, path_1.join)(process.cwd(), 'gallery');
        if (pre.url != "n2.jpg") {
            let tmpPath = (0, path_1.join)(dir + '/' + pre.url);
            console.log(tmpPath);
            (0, image_helper_1.removeFile)(tmpPath);
        }
        const fullPath = (0, path_1.join)(dir + '/' + file.filename);
        const res = await this.srv.upload({ id: data.id, url: fileName });
        if (res)
            return ({ res: 1, msg: 'success' });
        else {
            (0, image_helper_1.removeFile)(fullPath);
            return ({ res: 0, msg: 'failure' });
        }
    }
    async getImage(id, res) {
        res.sendFile(id, { root: './gallery' });
    }
    async deleteLabel(id) {
        const pre = await this.getSingle(id);
        const dir = (0, path_1.join)(process.cwd(), 'gallery');
        if (pre.url != "n2.jpg") {
            let tmpPath = (0, path_1.join)(dir + '/' + pre.url);
            console.log(tmpPath);
            (0, image_helper_1.removeFile)(tmpPath);
        }
        await this.srv.remove(id);
    }
};
__decorate([
    (0, common_1.Get)('fetch'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getImages", null);
__decorate([
    (0, common_1.Get)('fetch/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getSingle", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gallery_dto_1.AddGalleryDto]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gallery_dto_1.UpdateGalleryDto]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', image_helper_1.saveImageStorage)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getImage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('del/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "deleteLabel", null);
GalleryController = __decorate([
    (0, common_1.Controller)('api/gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
exports.GalleryController = GalleryController;
//# sourceMappingURL=gallery.controller.js.map