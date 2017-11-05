var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var auth = require('./routes/authorize');
var users = require('./routes/users');
var messages = require('./routes/messages');


var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

let connectionsString = 'mongodb://localhost:27017/chat';

mongoose.Promise = global.Promise;
mongoose.connect(connectionsString).
  then(() => console.log('OK')).
  catch((err) => console.log('Error:' + err));

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// app.use('/', index);
app.use('/authorize', auth);
app.use('/users', users);
app.use('/messages', messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


var port = process.env.PORT || '8080';
app.set('port', port);

var server = http.createServer(app);
var io = require('socket.io')(server);

server.listen(port);

io.on('connection', function (socket) {
  console.log('connection socket success');
  
  socket.on('newMessage', function() {
    console.log('new message');
    io.emit('updateMessages', true);
  });
  
});

module.exports = app;
