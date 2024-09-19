const {Router} = require('express')

const login = require('../../Controller/Login')

const pathLog = Router()

pathLog.post('/', login)


module.exports = pathLog