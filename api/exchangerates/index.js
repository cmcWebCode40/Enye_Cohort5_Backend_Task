const express = require('express')
const getExchangeRate = require('./getRate')

const router = express()

router.get('/', getExchangeRate)

module.exports = router