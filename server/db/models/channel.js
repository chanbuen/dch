const Sequelize = require('sequelize')
const db = require('..')

module.exports = db.define('channel', {
  name : {
    type : Sequelize.STRING
  } 
})