const { Users } = require('../../Models');
const { store } = require('../../session');
const { sendMail } = require('../../utils');

class UsersController {    
    static async register(req, res, next) {
        try {
            const user = new Users(req.body);
            if(await sendMail(user.email, user.password)) {
                await user.register();
                return res.json({});
            }
            return res.status(500).json({});
        } catch (error) {
            console.log(error);
            if(error.code === 'P2002') {
                return res.redirect(`/admin?duplicate=1`);
            }
            return res.status(500);
        }
    }
    
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await Users.validate(email, password);
            if(user) {
                if (user.deleted) return res.status(403).json({ message: 'O seu acesso foi revogado pelo administrador.'});
                req.session.user = user;
                return res.json({});
            }
            return res.status(401).json({ message: 'Verifique as credenciais fornecidas e tente novamente.'});
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async logout(req, res, next) {
        try {
            store.destroy(req.session.id);
            delete req.session;
            return res.redirect('/');
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async list(req, res, next) {
        try {
            const users = await Users.list();
            return res.json(users);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
    
    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const user = new Users(req.body);
            await user.update(Number(id));
            res.json({});
        } catch (error) {
            console.log(error);
            if(error.code === 'P2002') {
                return res.redirect(`/admin?duplicate=1`);
            }
            return res.status(500);
        }
    }
    
    static async delete(req, res, next) {
        const { id } = req.params;
        if(req.session.user.id === Number(id)) return res.status(400).json({})
        try {
            const users = await Users.delete(Number(id));
            return res.json(users);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
};

module.exports = UsersController;