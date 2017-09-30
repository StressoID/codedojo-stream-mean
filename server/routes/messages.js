var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = require('../models/Message.js');


/* GET messages listing. */
router.get('/', function (req, res, next) {
    Message
        .find({})
        .exec(function (err, messages) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(messages);
        });
});

/* POST message. */
router.post('/', function (req, res, next) {

    Message.create(req.body, function (err, messages) {
        res.status(200).json({"response": "ok"});
    });
});


module.exports = router;
