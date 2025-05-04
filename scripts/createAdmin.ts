// scripts/createAdmin.ts
const { PrismaClient } = require("../src/generated/prisma"); // met un chemin relatif
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("test", 10);

  await prisma.admin.create({
    data: {
      name: "xxxx",
      email: "xxxx",
      password: hashedPassword,
    },
  });

  console.log("Admin créé !");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
