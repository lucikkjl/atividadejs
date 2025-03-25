const users = []

class User {
    constructor(id, nome, email, senha) {
        this.id = id
        this.nome = nome        
        this.email = email
        this.senha = senha
    }

    save() {
        users.push(this)
    }

    update() { 
        const index = users.findIndex(user => user.id === this.id)
        users[index] = this
    }

    static fetchAll() {
        return users
    }

    static delete(id) {
        const index = users.findIndex(it => it.id === id)
        users.splice(index, 1)
    }
}

module.exports = User