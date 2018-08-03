const router = require('express').Router()
const Message = require('../db/models').Message

// GET api/messages
router.get('/', (req, res, next) => {
  Message.findAll()
    .then(messages => {
      if (messages) { 
        return res.json(messages)
      } 
    })
    .catch(err => console.error(err))
})

module.exports = router