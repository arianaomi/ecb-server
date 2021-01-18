
const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  make: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  km: {
    type: String
  },
  estimateDate: {
    type: String,
    required: false,
    trim: true
  },
  estimateDeliveryDate: {
    type: String,
    trim: false
  },
  id: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  personName: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('car', classSchema)
