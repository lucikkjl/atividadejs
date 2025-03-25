const projects = []

class Project {
    constructor(id, nome, descricao) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    save() {
        projects.push(this)
    }

    update() { 
        const index = projects.findIndex(project => project.id === this.id)
        projects[index] = this
    }

    static fetchAll() {
        return projects
    }

    static delete(id) {
        const index = projects.findIndex(it => it.id === id)
        projects.splice(index, 1)
    }

    }

module.exports = Project