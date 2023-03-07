"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    await (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'frontend'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'frontend'));
    app.engine('html', require('ejs').renderFile);
    app.setViewEngine('html');
    const PORT = Number(process.env.ST_PORT) || 3000;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map