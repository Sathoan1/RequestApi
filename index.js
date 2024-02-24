const express =require('express')
const app= express()
const PORT =  5000
const mongoose= require('mongoose')
require('dotenv').config()
const taskRouter = require('./route/taskRouter')

app.use(express.json())
app.use('/api/tasks', taskRouter)
// ||

const start= async ()=>{
   try {
    await mongoose.connect(process.env.dbURL)
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT} and db connected`);
    } )
   } catch (error) {
    console.log(error);
   }
};start()

