var mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
   nickName: String,
   message: String,
   created: { 
       type: Date, 
       default: Date.now()
   }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;