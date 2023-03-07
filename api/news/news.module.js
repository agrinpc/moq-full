"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const gallery_schema_1 = require("../gallery/schema/gallery.schema");
const labels_schema_1 = require("../labels/schema/labels.schema");
const news_controller_1 = require("./controller/news/news.controller");
const news_schema_1 = require("./schema/news.schema");
const news_service_1 = require("./service/news/news.service");
let NewsModule = class NewsModule {
};
NewsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'News', schema: news_schema_1.NewsSchema }, { name: 'Gallery', schema: gallery_schema_1.GallerySchema }, { name: 'Label', schema: labels_schema_1.LabelSchema }])],
        controllers: [news_controller_1.NewsController],
        providers: [news_service_1.NewsService]
    })
], NewsModule);
exports.NewsModule = NewsModule;
//# sourceMappingURL=news.module.js.map