const mongoose= require('mongoose')
const Schema= mongoose.Schema

const taskSchema = new Schema ({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
},
{timestamps:true})

module.exports= mongoose.model('Task', taskSchema)