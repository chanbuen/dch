const router = require('express').Router()

router.use('/channels', require('./channels'))

module.exports = router