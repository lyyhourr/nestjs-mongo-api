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
exports.QueryUserDTO = exports.UserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDTO {
}
exports.UserDTO = UserDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, { message: 'username must be at least 3 characters' }),
    (0, class_validator_1.MaxLength)(6, { message: 'username must be at most 6 characters' }),
    __metadata("design:type", String)
], UserDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, { message: 'username must be at least 3 characters' }),
    (0, class_validator_1.MaxLength)(6, { message: 'username must be at most 6 characters' }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
class QueryUserDTO {
}
exports.QueryUserDTO = QueryUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryUserDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: ['USER', 'ADMIN'] }),
    (0, class_validator_1.IsEnum)(['USER', 'ADMIN']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryUserDTO.prototype, "role", void 0);
//# sourceMappingURL=user.dto.js.map