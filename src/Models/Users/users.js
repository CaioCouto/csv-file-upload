const { users } = require('../prisma');
const bcrypt = require('bcrypt');


class Users {
    constructor({ name, email, role }) {
        this.name = name.toLowerCase();
        this.email = email.toLowerCase();
        this.role = Number(role);
        this.password = this.__generateRandomPassword();
    }

    __generateRandomPassword() {
        const min = Math.ceil(111111);
        const max = Math.floor(999999);
        const password =  Math.floor(Math.random() * (max - min)) + min;
        return password.toString();
    }

    register() {
        return users.create({
            data: {
                name: this.name,
                email: this.email,
                roleId: this.role,
                password: bcrypt.hashSync(this.password, 10)
            }
        });
    }
    
    update(id) {
        return users.update({
            where: {
                id: id
            },
            data: {
                name: this.name,
                email: this.email,
                roleId: this.role
            }
        });
    }

    static async validate(email, password) {
        try {
            const user = await users.findFirst({
                where: {
                    email: email
                },
                include: {
                    role: true
                }
            });
            return bcrypt.compareSync(password, user.password) ? user : false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    static list() {
        return users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                roleId: true,
                deleted: true
            },
            orderBy: {
                id: 'desc'
            }
        });
    }
    
    static async delete(id, userDeleted) {
        return await users.update({
            where: {
                id: id
            },
            data: {
                deleted: !userDeleted
            }
        });
    }
};

module.exports = Users;