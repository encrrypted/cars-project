const express = require('express')

const carRouter = express.Router()

const {
 getCars,
 getOneCar,
 addCar,
 updateCar,
 deleteCar
} = require('../controllers/carControler')

carRouter.get('/', getCars)

carRouter.get('/:id', getOneCar)

carRouter.post('/', express.json(), addCar)

carRouter.put('/:id', express.json(), updateCar)

carRouter.delete('/:id', deleteCar)

module.exports = carRouter