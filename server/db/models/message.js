const Sequelize = require('sequelize')
const db = require('../../db')

module.exports = db.define('message', {
  name : Sequelize.STRING
})