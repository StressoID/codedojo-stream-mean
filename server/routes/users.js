var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../modules/users/user.schema');


/* GET users listing. */
router.get('/', function (req, res, next) {
    User
        .find({})
        .exec(function (err, users) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(users);
        });
});

/* GET user by Id */
router.get('/:id', function (req, res, next) {
    User
        .find({'_id': req.params.id})
        .exec(function (err, user) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(user);
        });
});

/* POST create user. */
router.post('/', function (req, res, next) {

    User.create(req.body, function (err, user) {
        res.set('Content-Type', 'application/json').status(200);
    });
});

/* PUT update user. */
router.put('/', function (req, res, next) {

    User.findByIdAndUpdate(req.body, function (err, user) {
        res.set('Content-Type', 'application/json').status(200);
    });
});


module.exports = router;
