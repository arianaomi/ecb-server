const mongoose = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env
const CONN_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports = () =>
  mongoose.connect(
    CONN_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
