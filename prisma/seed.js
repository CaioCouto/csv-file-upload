const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const adminRole = await prisma.role.create({
      data: {
          role: 'admin'
      }
    });

    const userRole = await prisma.role.create({
      data: {
          role: 'user'
      }
    });

    const admin = await prisma.users.create({
        data: {
          email: 'admin@email.com.br',
          name: 'Admin',
          roleId: 1,
          deleted: false,
          password: bcrypt.hashSync('123999', 10)
        },
    });

    console.log('Data created:')
    console.log(adminRole)
    console.log(userRole)
    console.log(admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })