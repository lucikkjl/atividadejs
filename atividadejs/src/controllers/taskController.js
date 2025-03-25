const Task = require('../models/task')

class TaskController {
    static insert(req, res) {
        const { id, titulo, status, idProjeto, idUsuario } = req.body

        const task = new Task(id, titulo, status, idProjeto, idUsuario)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res) {
        const tasks = Task.fetchAll()

        res.json(tasks)
    }
}

module.exports = TaskController

/*3. Tarefas (/api/tasks)
3.1 Criar tarefa associada a um projeto e um usuário (POST)
3.2 Listar todas as tarefas (GET)
3.3 Atualizar status ou título da tarefa (PUT)
3.4 Remover tarefa (DELETE)*/ 