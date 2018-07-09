const router = require('express').Router()
const Channel = require('../db/models/channel')

router.get('/', (req, res, next) => {
  Channel.findAll()
    .then(channels => {
      if (channels) { 
        return res.json(channels)
      } else {
        throw new Error('No channels')
      }
    })
    .catch(err => console.error(err))
})