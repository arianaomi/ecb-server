
const express = require('express')

const router = express.Router()
const cars = require('../usecases/cars')

router.get('/', async (request, response) => {
  try {
    const allCars = await cars.getAll()
    response.json({
      success: true,
      dataCars: allCars
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newCarData = request.body
    const newCar = await cars.create(newCarData)
    response.json({
      success: true,
      dataCars: newCar
    })
  } catch (error) {
    response.status(400).json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const newData = request.body
    await cars.updateById(id, newData)

    response.json({
      success: true,
      message: 'Updated Car'
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
