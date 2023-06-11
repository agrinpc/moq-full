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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("../../../auth/service/auth/auth.service");
const bcrypt = require('bcrypt');
let UserService = class UserService {
    constructor(srv) {
        this.srv = srv;
        this.username = 'moghimi';
        this.pass = "$2a$12$hjC70tyYH7GDwZZ.t53I4.tVVOx7CyhOLcwwANCkgK//500rKgvCW";
    }
    async login(data) {
        return await this.validate(data.pwd).pipe((0, rxjs_1.switchMap)((res) => {
            if (data.username != this.username)
                return (0, rxjs_1.of)({ res: 0, msg: '' });
            if (!res)
                return (0, rxjs_1.of)({ res: 0, msg: '' });
            return this.srv.generateJWT(data).pipe((0, rxjs_1.switchMap)((jwt) => {
                return (0, rxjs_1.of)({ res: 1, msg: '', jwt: jwt });
            }));
        }));
    }
    validate(pwd) {
        return (0, rxjs_1.from)(bcrypt.compare(pwd, this.pass));
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map