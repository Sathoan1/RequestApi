const Tasks = require('../model/task')


// get all tsks
const getAllTasks= async (req,res)=>{
    try {
        const task= await Tasks.find()
        res.status(200).json({success: true, task})
    } catch (error) {
        res.status(500).json({success:false, error})
    }
}

// get a task
const getATask = async (req,res)=>{
    const {taskId}= req.params
    try {
        const task= await Tasks.findById({_id:taskId})
        res.status(200).json({success: true, task})
    } catch (error) {
        res.status(500).json({success:false, error})
    }
}

// create a task
const createTask= async (req,res)=>{
    const {title,description,tag}= req.body
    if (!title || !description || !tag) {
       return res.status(401).json({success:false, error: 'pls provide neccessary information'})
    }
    try {
        const task=await Tasks.create(req.body)
        res.status(200).json({success:true, task})
    } catch (error) {
        res.status(404).json({success:false, error})
    }
}

// update a tsk
const updateTask=async (req, res)=>{
    const {taskId}= req.params
    try {
        const task= await Tasks.findByIdAndUpdate({_id:taskId}, req.body, {new:true})
        res.status(200).json({success:true, task})
    } catch (error) {
        res.status(404).json({success:false, error})
    }
}

// delete a task
const deleteTask= async (req,res)=>{
    const {taskId}= req.params
    try {
        const task=await Tasks.findByIdAndDelete({_id:taskId},)
        res.status(200).json({success:true, message: 'task deleted successfully'})
    } catch (error) {
        res.status(404).json({success:false, error})
    }
}


module.exports={getAllTasks, createTask,getATask, updateTask, deleteTask}



