// scripts/createAdmin.ts
// Usage : npm run create:admin -- --name="Jean Dupont" --email=jean@popette-brunch.com --password="un-mot-de-passe-fort"
const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

function parseArgs() {
  const args: Record<string, string> = {};
  for (const raw of process.argv.slice(2)) {
    const match = raw.match(/^--([^=]+)=(.*)$/);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

async function main() {
  const { name, email, password } = parseArgs();

  if (!name || !email || !password) {
    console.error(
      'Usage : npm run create:admin -- --name="..." --email="..." --password="..."'
    );
    process.exit(1);
  }

  if (password.length < 8) {
    console.error("Le mot de passe doit contenir au moins 8 caractères.");
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.admin.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log(`Admin créé : ${email}`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
