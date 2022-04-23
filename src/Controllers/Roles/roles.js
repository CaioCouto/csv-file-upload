const { Roles } = require('../../Models');

class RolesController {
    
    static async list(req, res, next) {
        try {
            const roles = await Roles.list();
            return res.json(roles);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = RolesController;