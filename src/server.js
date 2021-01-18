
const express = require('express')
const app = express()

const carsRouter = require('./routes/cars')
const cors = require('cors')

// MIDDLEWARE  a nivel de applicaciones
app.use(cors())
app.use(express.json())

app.use('/cars', carsRouter)

app.get('/', (request, response) => {
  response.json({ success: true, message: 'ecb API' })
  console.log(request.method)
})

module.exports = app
