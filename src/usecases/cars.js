
const Car = require('../models/car')

function getAll () {
  return Car.find()
}

function create (carData) {
  return Car.create(carData)
}

function updateById (idCar, newData) {
  return Car.findByIdAndUpdate(idCar, newData)
}

module.exports = {
  getAll,
  create,
  updateById
}
