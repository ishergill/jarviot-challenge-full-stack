const cors = require('cors')
// const dotenvConfig = require('../../dotenvConfig' 
const morgan = require('morgan')
const express  = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

dotenv.config()
// const corsOption = {
//     origin: ["http://localhost:5173" ],
//     methods: ['GET','PUT','PATCH','POST','DELETE'],
//     credentials: true
//   }

const expressConfig = (app) => {

    app.use(morgan('dev'))
    app.use(cors({
      origin:'http://localhost:5173',
      credentials: true
    
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())

}

module.exports = expressConfig