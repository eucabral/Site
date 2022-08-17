const express = require('express')
const router = express.Router()

const repController = require('../Controller/repController')

router.get('/',repController.getRep)

module.exports = router