const { imports } = require("../prisma");


class Imports {
    constructor(datetime, userId) {
        this.userId = userId;
        this.importedAt = new Date();
        this.datetime = new Date(datetime);
    }

    register() {
        return imports.create({
            data: {
                datetime: this.datetime,
                importedAt: this.importedAt,
                userId: this.userId
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
    
    static async listByDatetime(datetimeInMilliseconds) {
        return await imports.findUnique({
            where: {
                datetime:new Date(datetimeInMilliseconds)
            }
        });
    }
};

module.exports = Imports;