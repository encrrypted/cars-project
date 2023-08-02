const express = require('express')

const userRouter = express.Router()

const {
 getUsers,
 registerUser
} = require('../controllers/userControler')

userRouter.get('/', getUsers)

userRouter.post('/', express.json(), registerUser)

module.exports = userRouter