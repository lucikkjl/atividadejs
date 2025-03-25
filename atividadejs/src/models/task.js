const tasks = []

class Task {
    constructor(id, titulo, status, idProjeto, idUsuario) {
        this.id = id
        this.titulo = titulo
        this.status = status
        this.idProjeto = idProjeto
        this.idUsuario = idUsuario
    }

    save() {
        tasks.push(this)
    }

    update() { 
        const index = tasks.findIndex(task => task.id === this.id)
        tasks[index] = this
    }

    static fetchAll() {
        return tasks
    }

    static delete(id) {
        const index = tasks.findIndex(it => it.id === id)
        tasks.splice(index, 1)
    }
}

module.exports = Task