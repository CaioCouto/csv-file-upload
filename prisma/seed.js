const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const roles = [ 'admin', 'user' ];
    roles.forEach(async role => {
        await prisma.role.create({
            data: {
                role: role
            }
        });
    })

    await prisma.users.create({
        data: {
          email: 'admin@email.com.br',
          name: 'Admin',
          roleId: 1,
          deleted: false,
          password: bcrypt.hashSync('123999', 10)
        },
    });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })