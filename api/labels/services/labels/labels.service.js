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
exports.LabelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LabelsService = class LabelsService {
    constructor(labelModel) {
        this.labelModel = labelModel;
        this.labels = [];
    }
    async fetchLabels() {
        this.labels = await this.labelModel.find().exec();
        return (this.labels);
    }
    async fetchLabelById(idVal) {
        const res = await this.labelModel.findById(idVal);
        return (res);
    }
    async add(data) {
        const newLabel = new this.labelModel(data);
        const res = await newLabel.save();
        return (res);
    }
    async update(data) {
        const res = await this.labelModel.findByIdAndUpdate(data.id, { title: data.title });
        return (res);
    }
    async remove(idVal) {
        await this.labelModel.deleteOne({ _id: idVal });
    }
};
LabelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Label')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LabelsService);
exports.LabelsService = LabelsService;
//# sourceMappingURL=labels.service.js.map