const router= require('express').Router()

const {getAllTasks,createTask, getATask, updateTask, deleteTask}= require('../controller/taskController.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:taskId').get(getATask).patch(updateTask).delete(deleteTask)

module.exports=router


