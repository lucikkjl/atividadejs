const Project = require('../models/project')

class ProjectController {
    static insert(req, res) {
        const { id, nome, descricao } = req.body

        const project = new Project(id, nome, descricao)
        project.save()

        res.status(201).json(project)
    }

    static findAll(req, res) {
        const projects = Project.fetchAll()

        res.json(projects)
    }
}

module.exports = ProjectController

/*1.2.1 Criar projeto (POST)
2.2 Listar todos os projetos (GET)
2.3 Atualizar nome e descrição do projeto (PUT)
2.4 Remover projeto (DELETE)
*/ 