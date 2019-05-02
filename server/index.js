const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

app.use(express.json())

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }

})
)

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log(`1- db connected`)
  console.log(`database tables ${database.listTables()}`)
  app.listen(SERVER_PORT, () => {
    console.log(`2-server online on port ${SERVER_PORT}`)
  })
})

app.get('/api/users', ctrl.getUsers)

