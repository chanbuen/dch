const router = require('express').Router()

router.use('/channels', require('./channels'))
router.use('/messages', require('./messages'))

module.exports = router