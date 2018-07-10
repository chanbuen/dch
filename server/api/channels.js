const router = require('express').Router()
const Channel = require('../db/models').channel

//GET api/channels
// router.get('/', (req, res, next) => {
//   Channel.findAll()
//     .then(channels => {
//       if (channels) { 
//         return res.json(channels)
//       } 
//     })
//     .catch(err => console.error(err))
// })

module.exports = router