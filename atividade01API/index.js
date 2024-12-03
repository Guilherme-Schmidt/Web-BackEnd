const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

let tasks = [
    {id:1, title:'Atividade01 API',description:'Realizar a tarefa de Programação Web Back-End'},
    {id:2, title:'Aula de API REST', description:'Assistir aulas dessa semana'}
];

app.post('/tasks',(req,res)=>{
    const{title, description} = req.body;
    const newTask ={
        id: tasks.length + 1, title, description, completed:false
    };
    tasks.push(newTask)
    res.status(201).json(newTask);
});

app.get('/tasks',(req,res)=>{
    res.json(tasks);
})

app.put('/tasks/:id',(req,res)=>{
    const {id} = req.params;
    const {title,description,completed} = req.body;
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if(taskIndex !== -1){
        tasks[taskIndex] = {id: parseInt(id),title,description,completed};
    }
    else{
        res.status(404).send("A tarefa não existe");
    }
});

app.delete('/tasks/:id',(req,res)=>{
    const {id} = req.params;
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex !== -1){
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    }
    else{
        res.status(404).send("A Tarefa não existe");
    }
});

