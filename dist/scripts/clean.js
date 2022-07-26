"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
if (require.main === module) {
    clean().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
async function clean() {
    console.info('Dropping all tables in the database...');
    const prisma = new client_1.PrismaClient();
    const tables = await getTables(prisma);
    const types = await getTypes(prisma);
    await dropTables(prisma, tables);
    await dropTypes(prisma, types);
    console.info('Cleaned database successfully');
    await prisma.$disconnect();
}
async function dropTables(prisma, tables) {
    for (const table of tables) {
        await prisma.$executeRawUnsafe(`DROP TABLE public."${table}" CASCADE;`);
    }
}
async function dropTypes(prisma, types) {
    for (const type of types) {
        await prisma.$executeRawUnsafe(`DROP TYPE IF EXISTS "${type}" CASCADE;`);
    }
}
async function getTables(prisma) {
    const results = await prisma.$queryRaw `SELECT tablename from pg_tables where schemaname = 'public';`;
    return results.map((result) => result.tablename);
}
async function getTypes(prisma) {
    const results = await prisma.$queryRaw `
 SELECT t.typname
 FROM pg_type t 
 JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
 WHERE n.nspname = 'public';
 `;
    return results.map((result) => result.typname);
}
//# sourceMappingURL=clean.js.map