const express = require('express')
const mongoose = require('mongoose')
const dbConfig = require('./config/database')

const swaggerDoc = require('./swaggerDoc')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose
      .connect(dbConfig.uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
      })
      .catch(err => {
        console.log('error al conectar a la db')
        console.log(err)
      })
  }

  middlewares () {
    this.express.use(express.json())
    swaggerDoc(this.express)
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
