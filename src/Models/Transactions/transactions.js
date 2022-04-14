const { transactions } = require("../prisma");


class Transactions {
    constructor([ originBank, originAgency, originAccount, destinationBank, destinationAgency, destinationAccount, amount, datetime ]) {
        this.originBank = originBank;
        this.originAgency = originAgency;
        this.originAccount = originAccount;
        this.destinationBank = destinationBank;
        this.destinationAgency = destinationAgency;
        this.destinationAccount = destinationAccount;
        this.amount = amount;
        this.datetime = new Date(datetime);
        this.importedAt = new Date();
    }

    register() {
        return transactions.create({
            data: {
                originBank: this.originBank,
                originAgency: this.originAgency,
                originAccount: this.originAccount,
                destinationBank: this.destinationBank,
                destinationAgency: this.destinationAgency,
                destinationAccount: this.destinationAccount,
                amount: this.amount,
                datetime: this.datetime,
                importedAt: this.importedAt
            }
        });
    }

    static list() {
        return transactions.findMany({
            select: {
                datetime: true,
                importedAt: true
            },
            orderBy: {
                datetime: 'desc'
            },
            distinct: ['importedAt']
        });
    }
};

module.exports = Transactions;