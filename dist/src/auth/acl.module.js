"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACLModule = void 0;
const nest_access_control_1 = require("nest-access-control");
const grants_1 = require("../grants");
exports.ACLModule = nest_access_control_1.AccessControlModule.forRoles(new nest_access_control_1.RolesBuilder(grants_1.grants));
//# sourceMappingURL=acl.module.js.map