const { role } = require('../prisma');


class Roles {
    static list() {
        return role.findMany();
    }
};

module.exports = Roles;