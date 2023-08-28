const express = require('express')
const expressConfig = require('./frameworks/webserver/expressConfig')
const  routes = require('./frameworks/webserver/routes/index')
const serverConfig = require('./frameworks/webserver/server')
const connectToMongoDb = require('./frameworks/database/mongoDb/connection')

const app = express()
//Connect to MongoDB 
connectToMongoDb()

//Config setting for express
expressConfig(app)



//Routes 
routes(app)

//server
serverConfig(app)