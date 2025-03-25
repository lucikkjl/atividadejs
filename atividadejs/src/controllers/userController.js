const User = require('../models/user')

class UserController {
    static insert(req, res) {
        const { id, nome, email, senha } = req.body

        const user = new User(id, nome, email, senha)
        user.save()

        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.fetchAll()

        res.json(users)
    }
}

module.exports = UserController

/*1. Usuários (/api/users)
1.1 Criar usuário (POST)
1.2 Listar todos os usuários (GET)
1.3 Atualizar nome de usuário (PUT)
1.4 Remover usuário (DELETE)
*/ 