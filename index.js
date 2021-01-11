const express = require('express')

const app = express()

const initializeApp = () => {
  require('./app/api')(app)
  require('./app/initMiddleware')(app)
  require('./app/listenToPort')(app)
}

initializeApp()