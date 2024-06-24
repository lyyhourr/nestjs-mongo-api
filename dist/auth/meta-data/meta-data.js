"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constant/constants");
const Public = () => (0, common_1.SetMetadata)(constants_1.IS_PUBLIC_KEY, true);
exports.Public = Public;
//# sourceMappingURL=meta-data.js.map