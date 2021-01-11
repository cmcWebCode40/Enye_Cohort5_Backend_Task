const express = require('express')


const router = express()

router.get('/', async (req, res) => (res.send('<h1>Welcome</h1>')))

module.exports = router