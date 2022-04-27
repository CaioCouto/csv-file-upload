const { imports } = require("../prisma");


class Imports {
    constructor(datetime) {
        this.datetime = new Date(datetime);
        this.importedAt = new Date();
    }

    register(userId) {
        return imports.create({
            data: {
                datetime: this.datetime,
                importedAt: this.importedAt,
                userId: userId
            }
        });
    }

    static async list() {
        return await imports.findMany({
            include: {
                user: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                datetime: 'desc'
            }
        });
    }
    
    static async listById(id) {
        return await imports.findUnique({
            where: {
                id:id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        });
    }
    
    static async listByDatetime(datetime) {
        return await imports.findUnique({
            where: {
                datetime:datetime
            }
        });
    }
};

module.exports = Imports;