const connectToDataBase = require('./db/connect')
const express = require('express')
const router = require('./routes/routes')
const app = express()
require("dotenv").config()

app.use(express.static('./public'))
app.use(express.json())



app.use('/api/v1/tasks', router)


const port = 5000
let start = async () =>{
    try {
        await connectToDataBase(`${process.env.DATABASE_URI}`)
        app.listen(port, console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()

