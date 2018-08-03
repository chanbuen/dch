const Sequelize = require('sequelize')
const db = require('..')

module.exports = db.define('message', {
  content : {
    type : Sequelize.STRING
  }
})