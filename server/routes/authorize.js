var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../modules/users/user.schema');
// TODO jwt 


/* POST authorize user for login. */
router.post('/', function (req, res, next) {

    User
        .findOne({'username': req.body.username})
        .exec(function (err, user) {
            res.set('Content-Type', 'application/json')
                .status(200)
                .json(user);
        });

    // TODO Jwt handling
});


module.exports = router;
