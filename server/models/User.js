var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   username: String,
   password: String,
   nickname: String,
   created: { 
       type: Date, 
       default: Date.now()
   },
   updated: {
       type: Date,
       default: Date.now()
   }
});

const Message = mongoose.model('User', UserSchema);

module.exports = Message;