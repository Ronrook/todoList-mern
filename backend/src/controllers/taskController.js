const taskCrtl ={};

taskCrtl.getTasks = (request, response)=> response.json({message: []});


taskCrtl.createTask = (request, response)=> response.json({message: 'Task Saved'})

taskCrtl.getTask = (request, response)=> response.json({title: 'nota devuelta'});

taskCrtl.updateTask = (request, response)=> response.json({message: 'Task updated'});

taskCrtl.deleteTask = (request, response)=> response.json({message: 'Task deleted'});

module.exports = taskCrtl;