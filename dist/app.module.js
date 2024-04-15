"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const search_controller_1 = require("./search/search.controller");
const companies_module_1 = require("./companies/companies.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("./companies/entities/company.entity");
const search_module_1 = require("./search/search.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    type: 'postgres',
                    host: configService.getOrThrow('POSTGRES_HOST'),
                    port: +configService.getOrThrow('POSTGRES_PORT'),
                    username: configService.getOrThrow('POSTGRES_USER'),
                    password: configService.getOrThrow('POSTGRES_PASSWORD'),
                    database: configService.getOrThrow('POSTGRES_DATABASE'),
                    synchronize: true,
                    entities: [company_entity_1.CompanyEntity],
                }),
                inject: [config_1.ConfigService],
            }),
            companies_module_1.CompaniesModule,
            search_module_1.SearchModule,
        ],
        controllers: [app_controller_1.AppController, search_controller_1.SearchController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map