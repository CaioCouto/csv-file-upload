const { imports } = require("../prisma");


class Imports {
    constructor(datetime) {
        this.datetime = new Date(datetime);
        this.importedAt = new Date();
    }

    register() {
        return imports.create({
            data: {
                datetime: this.datetime,
                importedAt: this.importedAt
            }
        });
    }

    static list() {
        return imports.findMany({
            orderBy: {
                datetime: 'desc'
            }
        });
    }
};

module.exports = Imports;