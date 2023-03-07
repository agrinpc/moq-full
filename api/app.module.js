"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.get_con = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const labels_module_1 = require("./labels/labels.module");
const categories_module_1 = require("./categories/categories.module");
const gallery_module_1 = require("./gallery/gallery.module");
const article_module_1 = require("./article/article.module");
const news_module_1 = require("./news/news.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const serve_static_1 = require("@nestjs/serve-static");
const dotenv_1 = require("dotenv");
function get_con() {
    (0, dotenv_1.config)();
    return String(process.env.DB_CON) || "mongodb://localhost:27017/";
}
exports.get_con = get_con;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({ rootPath: 'public' }),
            mongoose_1.MongooseModule.forRoot(get_con()),
            labels_module_1.LabelsModule,
            categories_module_1.CategoriesModule,
            gallery_module_1.GalleryModule,
            article_module_1.ArticleModule,
            news_module_1.NewsModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map