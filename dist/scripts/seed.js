"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const client_1 = require("@prisma/client");
const password_service_1 = require("../src/auth/password.service");
const bcrypt_1 = require("bcrypt");
const customSeed_1 = require("./customSeed");
if (require.main === module) {
    dotenv.config();
    const { BCRYPT_SALT } = process.env;
    if (!BCRYPT_SALT) {
        throw new Error('BCRYPT_SALT environment variable must be defined');
    }
    const salt = (0, password_service_1.parseSalt)(BCRYPT_SALT);
    seed(salt).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
async function seed(bcryptSalt) {
    console.info('Seeding database...');
    const client = new client_1.PrismaClient();
    const data = {
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
        phone: '123456789',
        password: await (0, bcrypt_1.hash)('admin', bcryptSalt),
        roles: ['user'],
    };
    await client.user.upsert({
        where: {
            email: data.email,
        },
        update: {},
        create: data,
    });
    void client.$disconnect();
    console.info('Seeding database with custom seed...');
    (0, customSeed_1.customSeed)();
    console.info('Seeded database successfully');
}
//# sourceMappingURL=seed.js.map