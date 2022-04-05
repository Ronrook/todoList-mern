const taskCrtl ={};

const taskModel = require('../models/Task');

taskCrtl.getTasks = async (request, response)=> {
    const tasks = await taskModel.find(); //  [{}]
    response.json(tasks);
}


taskCrtl.createTask = async (request, response)=> {
    const {title, description} = request.body;
    const newTask= new taskModel({
        title,
        description
    })
    await newTask.save();
    response.json({message: 'Task Saved'})

};

taskCrtl.getTask = async (request, response)=> {
     
    const task = await taskModel.findById(request.params.id); //  {}
    response.json(task);

}

taskCrtl.updateTask = async (request, response)=> {
    const {title, description} = request.body;
    await taskModel.findOneAndUpdate({_id : request.params.id}, {
        title,
        description
    } )

    response.json({message: 'Task updated'});

}

taskCrtl.deleteTask = async (request, response)=> {
    await taskModel.findByIdAndDelete(request.params.id);
    response.json({message: 'Task deleted'});
}
module.exports = taskCrtl;