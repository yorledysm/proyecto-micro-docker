const express = require('express')
const app = express()
const cors=require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))



const proyectos = require('./routes/proyecto')






app.use('/api/proyecto', proyectos)


module.exports = app


