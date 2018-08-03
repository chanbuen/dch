const Sequelize = require('sequelize')
const db = require('..')

module.exports = db.define('author', {
  name : {
    type : Sequelize.STRING
  },
  image : {
    type : Sequelize.STRING
  }
})