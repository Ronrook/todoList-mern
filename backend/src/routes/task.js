const {Router} = require('express');
const router = Router();

const {getTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/taskController');

router.route('/')
    .get(getTasks)
    .post(createTask)

router.route('/:id')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask)

module.exports = router;