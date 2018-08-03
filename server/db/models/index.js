const Channel = require('./channel')
const Message = require('./message')
const Author = require('./author')

Message.belongsTo(Channel)
Message.belongsTo(Author)
Author.hasMany(Message)
Channel.hasMany(Message)

module.exports = {
  Channel,
  Message,
  Author
}