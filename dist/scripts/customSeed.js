"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSeed = void 0;
const client_1 = require("@prisma/client");
async function customSeed() {
    const client = new client_1.PrismaClient();
    const email = 'admin@demo.com';
    await client.user.update({
        where: { email: email },
        data: {
            email,
        },
    });
    client.$disconnect();
}
exports.customSeed = customSeed;
//# sourceMappingURL=customSeed.js.map