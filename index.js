
//* Este archivo poner la aplicación en marcha
require('dotenv').config()

const dbConnect = require('./src/lib/db')

const server = require('./src/server')

const port = process.env.PORT || 8080

dbConnect()
  .then(() => {
    console.log('DB connected')
    server.listen(port, () => {
      console.log('server is listening')
    })
  })
  .catch(error => {
    console.log('Error: ', error)
  })
