var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/Message.js');

/*
const messages = [{
           nickName: 'Ivan',
           message: 'Message from Ivan',
           created: Date.now()
        },
        {
           nickName: 'Dmitry',
           message: 'Message from Dmitry',
           created: Date.now()
        }];
   */   

/* GET messages listing. */
router.get('/', function(req, res, next) {
    Message
        .find({})
        .exec(function(err, messages) {
            res.set('Content-Type', 'application/json')
            .status(200)
            .json(messages);
        });
});

/* POST message. */
router.post('/', function(req, res, next) {
    // messages.push(req.body);
    Message.create(req.body, function (err, messages) {
        res.set('Content-Type', 'application/json').status(200).send('ok');
    });
});



module.exports = router;
